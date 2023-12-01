import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateMembershipFeeDto {
  @ApiProperty({
    example: 300,
    type: 'integer',
    format: 'int32',
  })
  @IsNotEmpty()
  @IsInt()
  amount: number;
  @ApiProperty({
    example: 2022,
    type: 'integer',
    format: 'int32',
  })
  @IsNotEmpty()
  @IsInt()
  year: number;
  @ApiProperty({
    example: 2,
    type: 'integer',
    format: 'int32',
  })
  @IsNotEmpty()
  @IsInt()
  reportingMonth: number;
}
