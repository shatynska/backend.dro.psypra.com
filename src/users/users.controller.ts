import { JwtPayload } from '@auth/interfaces';
import { CurrentUser } from '@common/decorators';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { UserResponseDto } from './dto';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':idOrEmail')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiBearerAuth()
  async findOne(@Param('idOrEmail') idOrEmail: string) {
    const user = await this.usersService.findOne(idOrEmail);
    return new UserResponseDto(user);
  }

  @Delete(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiBearerAuth()
  async remove(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.usersService.remove(id, user);
  }

  @Get()
  @ApiBearerAuth()
  me(@CurrentUser() user: JwtPayload) {
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
