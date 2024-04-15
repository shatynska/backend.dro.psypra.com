import { Cookie, Public, UserAgent } from '@common/decorators';
import { handleTimeoutAndErrors } from '@common/helpers';
import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Provider } from '@prisma/client';
import { Request, Response } from 'express';
import { map, mergeMap } from 'rxjs';
import { UserResponseDto } from 'src/users/dto';
import { AuthService } from './auth.service';
import { LoginDto, LoginResponseDto, RegisterDto } from './dto';
import { GoogleGuard } from './guards/google.guard';
import { Tokens } from './interfaces';

const REFRESH_TOKEN = 'refreshtoken';

@Controller('auth')
@Public()
@ApiTags('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  @Post('register')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({
    summary: 'Register user',
  })
  @ApiResponse({
    status: 201,
    type: UserResponseDto,
  })
  @ApiConflictResponse()
  @ApiBadRequestResponse()
  async register(@Body() dto: RegisterDto) {
    const user = await this.authService.register(dto);
    if (!user) {
      throw new BadRequestException(
        `Unable to register user with data ${JSON.stringify(dto)}`,
      );
    }
    return new UserResponseDto(user);
  }

  @Post('login')
  @ApiOperation({
    summary: 'Login user',
  })
  @ApiResponse({
    status: 201,
    type: LoginResponseDto,
  })
  @ApiBadRequestResponse()
  async login(
    @Body() dto: LoginDto,
    @Res() res: Response,
    @UserAgent() agent: string,
  ) {
    const tokens = await this.authService.login(dto, agent);
    if (!tokens) {
      throw new BadRequestException(
        `Unable to login with data ${JSON.stringify(dto)}`,
      );
    }
    this.setRefreshTokenToCookies(tokens, res);
  }

  @ApiOperation({
    summary: 'Logout user',
  })
  @ApiResponse({
    status: 200,
  })
  @Get('logout')
  async logout(
    @Cookie(REFRESH_TOKEN) refreshToken: string,
    @Res() res: Response,
  ) {
    if (!refreshToken) {
      res.sendStatus(HttpStatus.OK);
      return;
    }
    await this.authService.deleteRefreshToken(refreshToken);
    res.cookie(REFRESH_TOKEN, '', {
      httpOnly: true,
      secure: true,
      expires: new Date(),
    });
    res.sendStatus(HttpStatus.OK);
  }

  @Get('refresh-tokens')
  async refreshTokens(
    @Cookie(REFRESH_TOKEN) refreshToken: string,
    @Res() res: Response,
    @UserAgent() agent: string,
  ) {
    if (!refreshToken) {
      throw new UnauthorizedException();
    }
    const tokens = await this.authService.refreshTokens(refreshToken, agent);
    if (!tokens) {
      throw new UnauthorizedException();
    }
    this.setRefreshTokenToCookies(tokens, res);
  }

  private setRefreshTokenToCookies(tokens: Tokens, res: Response) {
    if (!tokens) {
      throw new UnauthorizedException();
    }
    res.cookie(REFRESH_TOKEN, tokens.refreshToken.token, {
      httpOnly: true,
      sameSite: 'lax',
      expires: new Date(tokens.refreshToken.exp),
      secure:
        this.configService.get('NODE_ENV', 'development') === 'production',
      path: '/',
    });
    res.status(HttpStatus.CREATED).json({ accessToken: tokens.accessToken });
  }

  @UseGuards(GoogleGuard)
  @Get('google')
  googleAuth() {}

  @UseGuards(GoogleGuard)
  @Get('google/callback')
  googleAuthCallback(@Req() req: Request, @Res() res: Response) {
    if (req.user) {
      const token = req.user['accessToken'];
      res.redirect(
        `${this.configService.get(
          'API_URL',
        )}/auth/success-google?token=${token}`,
      );
    } else {
      throw new BadRequestException();
    }
  }

  @Get('success-google')
  successGoogle(
    @Query('token') token: string,
    @UserAgent() agent: string,
    @Res() res: Response,
  ) {
    return this.httpService
      .get(
        `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${token}`,
      )
      .pipe(
        mergeMap(({ data: { userName } }) =>
          this.authService.providerAuth(userName, agent, Provider.GOOGLE),
        ),
        map((data) => this.setRefreshTokenToCookies(data, res)),
        handleTimeoutAndErrors(),
      );
  }
}
