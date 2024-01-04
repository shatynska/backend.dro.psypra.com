import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCashBookDto {
  @ApiProperty({
    example: 2022,
  })
  @IsNotEmpty()
  @IsString()
  title: string;
  @ApiProperty({
    example: 842000,
    type: 'integer',
    format: 'int32',
  })
  @IsNotEmpty()
  @IsInt()
  cashBalance: number;
}
