import { ApiProperty } from '@nestjs/swagger';

export class PageSectionHeaderHeadingsResponseDto {
  @ApiProperty({ example: 'Критерії пошуку' })
  primary: string;

  @ApiProperty({ example: 'Багато питань?' })
  secondary: string;
}

export const pageSectionHeaderHeadingsResponseDtoStubs: PageSectionHeaderHeadingsResponseDto[] =
  [
    {
      primary: 'Критерії пошуку',
      secondary: 'Багато питань?',
    },
    {
      primary: 'Спеціальності',
      secondary: 'Хто є хто?',
    },
    {
      primary: 'Спеціалісти',
      secondary: 'До кого звернутися?',
    },
  ];
