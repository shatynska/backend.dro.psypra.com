import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateExpenseDto {
  @ApiProperty({
    example: 380,
    type: 'integer',
    format: 'int32',
    required: false,
  })
  @IsOptional()
  @IsInt()
  amount?: number;
  @ApiProperty({
    example: 'піца',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  details?: string | null;
  @ApiProperty({
    example: 2022 - 11 - 27,
    type: 'string',
    format: 'date-time',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  date?: Date;
}
