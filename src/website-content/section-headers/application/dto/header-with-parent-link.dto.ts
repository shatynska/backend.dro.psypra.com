import {
  HeaderWithHrefDto,
  headerWithHrefDtoStubs,
} from './header-with-href.dto';
import { HeaderDto } from './header.dto';
import { headingsDtoStubs } from './headings.dto';

export class HeaderWithParentLinkDto extends HeaderDto {
  parentLink: HeaderWithHrefDto;
}

export const headerWithParentLinkDtoStubs: HeaderWithParentLinkDto[] = [
  {
    headings: headingsDtoStubs[1],
    parentLink: headerWithHrefDtoStubs[0],
  },
  {
    headings: headingsDtoStubs[2],
    parentLink: headerWithHrefDtoStubs[1],
  },
  {
    headings: headingsDtoStubs[3],
    parentLink: headerWithHrefDtoStubs[0],
  },
  {
    headings: headingsDtoStubs[4],
    parentLink: headerWithHrefDtoStubs[2],
  },
];
