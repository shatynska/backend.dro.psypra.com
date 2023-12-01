import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional } from 'class-validator';

export class UpdateMembershipFeeDto {
  @ApiProperty({
    example: 300,
    type: 'integer',
    format: 'int32',
    required: false,
  })
  @IsOptional()
  @IsInt()
  amount?: number;
  @ApiProperty({
    example: 2022,
    type: 'integer',
    format: 'int32',
    required: false,
  })
  @IsOptional()
  @IsInt()
  year?: number;
  @ApiProperty({
    example: 2,
    type: 'integer',
    format: 'int32',
    required: false,
  })
  @IsOptional()
  @IsInt()
  reportingMonth?: number;
}
