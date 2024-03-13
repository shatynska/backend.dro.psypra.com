import { ApiProperty } from '@nestjs/swagger';
import {
  PageSectionHeaderHeadingsResponseDto,
  pageSectionHeaderHeadingsResponseDtoStubs,
} from './page-section-header-headings.response.dto';
import {
  PageSectionHeaderWithHrefResponseDto,
  pageSectionHeaderWithHrefResponseDtoStubs,
} from './page-section-header-with-href.response.dto';

export class PageSectionHeaderWithParentLinkResponseDto {
  @ApiProperty({ example: pageSectionHeaderHeadingsResponseDtoStubs[1] })
  headings: PageSectionHeaderHeadingsResponseDto;

  @ApiProperty({
    example: pageSectionHeaderWithHrefResponseDtoStubs[0],
  })
  parentLink: PageSectionHeaderWithHrefResponseDto;
}

export const pageSectionHeaderWithParentLinkResponseDtoStubs: PageSectionHeaderWithParentLinkResponseDto[] =
  [
    {
      headings: pageSectionHeaderHeadingsResponseDtoStubs[1],
      parentLink: pageSectionHeaderWithHrefResponseDtoStubs[0],
    },
  ];
