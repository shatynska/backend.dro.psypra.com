import { ApiProperty } from '@nestjs/swagger';

export class HomeQuestionsPageSectionContentItemResponseDto {
  @ApiProperty({ example: 'До кого звернутися?' })
  title: string;

  @ApiProperty({ example: '/specialists' })
  href: string;
}

export const homeQuestionsPageSectionContentItemResponseDtoStubs: HomeQuestionsPageSectionContentItemResponseDto[] =
  [
    { title: 'До кого звернутися?', href: '/specialists' },
    { title: 'З ким працюють?', href: '/ages' },
  ];
