import { ApiProperty } from '@nestjs/swagger';

export class HomeQuestionsContentItemResponseDto {
  @ApiProperty({ example: 'До кого звернутися?' })
  title: string;

  @ApiProperty({ example: '/specialists' })
  href: string;
}

export const homeQuestionsContentItemResponseDtoStubs: HomeQuestionsContentItemResponseDto[] =
  [
    { title: 'До кого звернутися?', href: '/specialists' },
    { title: 'З ким працюють?', href: '/ages' },
  ];
