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
}
