import { ApiProperty } from '@nestjs/swagger';
import { PageSectionHeaderDto } from '~/page-sections/application/dto/page-section-header.dto';
import {
  PageSectionHeaderWithParentLinkResponseDto,
  pageSectionHeaderWithParentLinkResponseDtoStubs,
} from './page-section-header-with-parent-link.response.dto';
import { PageSectionResponseDto } from './page-section.response.dto';

export class PageSectionWithHeaderWithParentLinkResponseDto extends PageSectionResponseDto {
  @ApiProperty({
    type: PageSectionHeaderWithParentLinkResponseDto,
    example: pageSectionHeaderWithParentLinkResponseDtoStubs[0],
  })
  header: PageSectionHeaderWithParentLinkResponseDto;

  constructor(header: PageSectionHeaderDto) {
    super(header);
    this.header.parentLink = {
      headings: {
        primary: header.parentLink.primaryHeading,
        secondary: header.parentLink.secondaryHeading,
      },
      href: header.parentLink.href,
    };
  }
}

export const pageSectionResponseDtoStubs: PageSectionWithHeaderWithParentLinkResponseDto[] =
  [
    {
      header: pageSectionHeaderWithParentLinkResponseDtoStubs[0],
    },
  ];
