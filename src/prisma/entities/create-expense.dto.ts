import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateExpenseDto {
  @ApiProperty({
    example: 380,
    type: 'integer',
    format: 'int32',
  })
  @IsNotEmpty()
  @IsInt()
  amount: number;
  @ApiProperty({
    example: 'піца',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  details?: string;
  @ApiProperty({
    example: 2022 - 11 - 27,
    type: 'string',
    format: 'date-time',
  })
  @IsNotEmpty()
  @IsDateString()
  date: Date;
}
