import { DimensionItemDto } from './dimension-item.dto';

export class DimensionItemWithAliasAndHrefDto extends DimensionItemDto {
  alias: string;
  href: string;
}

export const dimensionItemWithAliasAndHrefDtoStubs: DimensionItemWithAliasAndHrefDto[] =
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
