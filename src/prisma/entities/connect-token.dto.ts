import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ConnectTokenDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  token: string;
}
