import { HeadingsDto, headingsDtoStubs } from './headings.dto';

export class HeaderDto {
  headings: HeadingsDto;
  href: string | null;
}

export const headerDtoStubs: HeaderDto[] = [
  {
    headings: headingsDtoStubs[0],
    href: '/#questions',
  },
  {
    headings: headingsDtoStubs[1],
    href: '/specialties',
  },
  {
    headings: headingsDtoStubs[3],
    href: '/specialists',
  },
  {
    headings: headingsDtoStubs[2],
    href: null,
  },
  {
    headings: headingsDtoStubs[4],
    href: null,
  },
  {
    headings: headingsDtoStubs[5],
    href: null,
  },
  {
    headings: headingsDtoStubs[6],
    href: '/themes',
  },
];
