import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() dto) {
    return this.usersService.save(dto);
  }

  @Get(':idOrEmail')
  findOne(@Param('idOrEmail') idOrEmail: string) {
    return this.usersService.findOne(idOrEmail);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.remove(id);
  }
}
