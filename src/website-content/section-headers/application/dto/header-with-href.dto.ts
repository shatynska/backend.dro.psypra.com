import { HeaderDto } from './header.dto';
import { headingsDtoStubs } from './headings.dto';

export class HeaderWithHrefDto extends HeaderDto {
  href: string;
}

export const headerWithHrefDtoStubs: HeaderWithHrefDto[] = [
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
    headings: headingsDtoStubs[6],
    href: '/themes',
  },
];
