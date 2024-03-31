import { OmitType } from '@nestjs/swagger';
import { HeaderDto, headerDtoStubs } from './header.dto';
import { headingsDtoStubs } from './headings.dto';

export class HeaderWithParentLinkDto extends OmitType(HeaderDto, ['href']) {
  parentLink: NonNullable<HeaderDto>;
}

export const headerWithParentLinkDtoStubs: HeaderWithParentLinkDto[] = [
  {
    headings: headingsDtoStubs[1],
    parentLink: headerDtoStubs[0],
  },
  {
    headings: headingsDtoStubs[2],
    parentLink: headerDtoStubs[1],
  },
  {
    headings: headingsDtoStubs[3],
    parentLink: headerDtoStubs[0],
  },
  {
    headings: headingsDtoStubs[4],
    parentLink: headerDtoStubs[2],
  },
];
