import { ApiProperty } from '@nestjs/swagger';
import { PageSectionHeaderDto } from '~/page-sections/application/dto/page-section-header.dto';
import {
  PageSectionHeaderHeadingsResponseDto,
  pageSectionHeaderHeadingsResponseDtoStubs,
} from './page-section-header-headings.response.dto';

export class PageSectionHeaderWithHrefResponseDto {
  @ApiProperty({
    example: pageSectionHeaderHeadingsResponseDtoStubs[0],
  })
  headings: PageSectionHeaderHeadingsResponseDto;

  @ApiProperty({ example: '/#questions' })
  href: string;

  constructor(header: PageSectionHeaderDto) {
    this.headings = {
      primary: header.primaryHeading,
      secondary: header.secondaryHeading,
    };
    this.href = header.secondaryHeading;
  }
}

export const pageSectionHeaderWithHrefResponseDtoStubs: PageSectionHeaderWithHrefResponseDto[] =
  [
    {
      headings: pageSectionHeaderHeadingsResponseDtoStubs[0],
      href: '/#questions',
    },
    {
      headings: pageSectionHeaderHeadingsResponseDtoStubs[1],
      href: '/specialties',
    },
    {
      headings: pageSectionHeaderHeadingsResponseDtoStubs[2],
      href: '/specialists',
    },
  ];
