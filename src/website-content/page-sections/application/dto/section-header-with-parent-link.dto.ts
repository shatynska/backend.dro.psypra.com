import {
  SectionHeaderWithHrefDto,
  sectionHeaderWithHrefDtoStubs,
} from './section-header-with-href.dto';
import {
  SectionHeaderDto,
  sectionHeadingsDtoStubs,
} from './section-header.dto';

export class SectionHeaderWithParentLinkDto extends SectionHeaderDto {
  parentLink: SectionHeaderWithHrefDto;
}

export const sectionHeaderWithParentLinkDtoStubs: SectionHeaderWithParentLinkDto[] =
  [
    {
      headings: sectionHeadingsDtoStubs[1],
      parentLink: sectionHeaderWithHrefDtoStubs[0],
    },
    {
      headings: sectionHeadingsDtoStubs[2],
      parentLink: sectionHeaderWithHrefDtoStubs[1],
    },
    {
      headings: sectionHeadingsDtoStubs[3],
      parentLink: sectionHeaderWithHrefDtoStubs[0],
    },
    {
      headings: sectionHeadingsDtoStubs[4],
      parentLink: sectionHeaderWithHrefDtoStubs[2],
    },
  ];
