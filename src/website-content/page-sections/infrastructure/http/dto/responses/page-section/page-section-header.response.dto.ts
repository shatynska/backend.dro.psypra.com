import { ApiProperty } from '@nestjs/swagger';
import {
  PageSectionHeaderHeadingsResponseDto,
  pageSectionHeaderHeadingsResponseDtoStubs,
} from './page-section-header-headings.response.dto';

export class PageSectionHeaderResponseDto {
  @ApiProperty({
    example: pageSectionHeaderHeadingsResponseDtoStubs[0],
  })
  headings: PageSectionHeaderHeadingsResponseDto;
}

export const pageSectionHeaderResponseDtoStubs: PageSectionHeaderResponseDto[] =
  [
    {
      headings: pageSectionHeaderHeadingsResponseDtoStubs[0],
    },
    {
      headings: pageSectionHeaderHeadingsResponseDtoStubs[1],
    },
  ];
