import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCashBookDto {
  @ApiProperty({
    example: 2022,
  })
  @IsNotEmpty()
  @IsString()
  title: string;
}
