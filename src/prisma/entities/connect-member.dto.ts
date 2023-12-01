import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class ConnectMemberDto {
  @ApiProperty({
    example: 'c0287617-9f36-489e-ba72-d462777987e9',
  })
  @IsNotEmpty()
  @IsString()
  @IsUUID(4)
  id: string;
}
