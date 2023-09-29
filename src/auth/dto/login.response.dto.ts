import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({
    example:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBjMjg3NjE3LTlmMzYtNDg5ZS1iYTcyLWQ0NjI3Nzc5ODdlOSIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIiwiQURNSU4iXSwiaWF0IjoxNjk1OTI4NTc5LCJleHAiOjE2OTYwMTQ5Nzl9.VblvTacY29lbiE_IZl2bb6itQ8mCsgf4TZrk2bmdXnU',
  })
  accessToken: string;
}
