import { MemberStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateMemberDto {
  @ApiProperty({
    example: 'Олег',
    required: false,
  })
  @IsOptional()
  @IsString()
  firstName?: string;
  @ApiProperty({
    example: 'Зварицький',
    required: false,
  })
  @IsOptional()
  @IsString()
  lastName?: string;
  @ApiProperty({
    example: [MemberStatus.ACTIVE],
    enum: MemberStatus,
    required: false,
  })
  @IsOptional()
  status?: MemberStatus;
}
