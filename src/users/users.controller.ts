import {
  Controller,
  Get,
  Param,
  Delete,
  ParseUUIDPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserResponse } from './responses';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':idOrEmail')
  async findOne(@Param('idOrEmail') idOrEmail: string) {
    const user = await this.usersService.findOne(idOrEmail);
    return new UserResponse(user);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.remove(id);
  }
}
