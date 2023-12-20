import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateCashBalanceDto {
  @ApiProperty({
    example: 8420,
    type: 'integer',
    format: 'int32',
  })
  @IsNotEmpty()
  @IsInt()
  value: number;
}
