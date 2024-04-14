import { CurrentUser } from '@common/decorators';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { JwtPayloadDto } from '~/shared/application/dto/jwt-payload.dto';
import { UserResponseDto } from './dto';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':identifier')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiBearerAuth()
  async findOne(@Param('identifier') identifier: string) {
    const user = await this.usersService.findOne(identifier);
    if (!user) {
      throw new NotFoundException();
    }
    return new UserResponseDto(user);
  }

  @Delete(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiBearerAuth()
  async remove(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() user: JwtPayloadDto,
  ) {
    return this.usersService.remove(id, user);
  }

  @Get()
  @ApiBearerAuth()
  me(@CurrentUser() user: JwtPayloadDto) {
    return user;
  }

  @Put()
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiBearerAuth()
  async updateUser(@Body() body: Partial<User>) {
    const user = await this.usersService.save(body);
    return new UserResponseDto(user);
  }
}
