import { ApiProperty } from '@nestjs/swagger';

export class SpecialistBriefContentResponseDto {
  @ApiProperty()
  specialties: any;
}

export const specialistBriefContentResponseDtoStubs: SpecialistBriefContentResponseDto[] =
  [{ specialties: '' }];
