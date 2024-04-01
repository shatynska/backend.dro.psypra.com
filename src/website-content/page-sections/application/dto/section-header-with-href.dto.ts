import {
  SectionHeaderDto,
  sectionHeadingsDtoStubs,
} from './section-header.dto';

export class SectionHeaderWithHrefDto extends SectionHeaderDto {
  href: string;
}

export const sectionHeaderWithHrefDtoStubs: SectionHeaderWithHrefDto[] = [
  {
    headings: sectionHeadingsDtoStubs[0],
    href: '/#questions',
  },
  {
    headings: sectionHeadingsDtoStubs[1],
    href: '/specialties',
  },
  {
    headings: sectionHeadingsDtoStubs[3],
    href: '/specialists',
  },
  {
    headings: sectionHeadingsDtoStubs[6],
    href: '/themes',
  },
];
