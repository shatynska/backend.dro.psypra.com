import { ApiProperty } from '@nestjs/swagger';

export class DimensionMainContentItemResponseDto {
  @ApiProperty({ example: 'psychologist' })
  alias: string;

  @ApiProperty({ example: 'психолог' })
  title: string;

  @ApiProperty({ example: '/specialties/psychologist' })
  href: string;

  @ApiProperty({
    example:
      'Це фахівець, який оцінює, діагно­стує і вивчає пове­дінку і розу­мові процеси. Деякі пси­хологи, такі як клі­нічні ...',
  })
  description?: string;
}

export const dimensionMainContentItemResponseDtoStubs: DimensionMainContentItemResponseDto[] =
  [
    {
      alias: 'psychologist',
      title: 'психолог',
      href: '/specialties/psychologist',
      description:
        'Це фахівець, який оцінює, діагно­стує і вивчає пове­дінку і розу­мові процеси. Деякі пси­хологи, такі як клі­нічні ...',
    },
    {
      alias: 'psychotherapist',
      title: 'Психотерапевт',
      href: '/specialties/psychotherapist',
      description:
        'Фахівець, який має повну вищу ос­віту за нап­рямом під­готовки ...',
    },
  ];
