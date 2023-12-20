import { MemberStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMemberDto {
  @ApiProperty({
    example: 'Олег',
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;
  @ApiProperty({
    example: 'Зварицький',
  })
  @IsNotEmpty()
  @IsString()
  lastName: string;
  @ApiProperty({
    example: [MemberStatus.ACTIVE],
    enum: MemberStatus,
  })
  @IsNotEmpty()
  status: MemberStatus;
}
