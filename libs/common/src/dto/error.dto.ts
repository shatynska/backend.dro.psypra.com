import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class ErrorDto {
  @ApiProperty({ default: 'The server encountered an unexpected condition' })
  message!: string;

  @ApiProperty({ default: 'Internal Server Error' })
  error!: string;

  @ApiProperty({ enum: HttpStatus, default: HttpStatus.INTERNAL_SERVER_ERROR })
  statusCode!: HttpStatus;
}
