import { ApiProperty } from '@nestjs/swagger';

export class SpecialistMainContentResponseDto {
  @ApiProperty()
  firstName: string;
  lastName: string;
  specialties: string[];
  phones: string[];
  emails: string[];
  websites: string[];
}

export const specialistMainContentResponseDtoStubs: SpecialistMainContentResponseDto[] =
  [
    {
      firstName: 'Олена',
      lastName: 'Шатинська',
      specialties: ['психолог', 'психотерапевт'],
      phones: ['+380980074869'],
      emails: ['shatynskaa@gmail.com'],
      websites: ['https://shatynska.in.ua'],
    },
  ];
