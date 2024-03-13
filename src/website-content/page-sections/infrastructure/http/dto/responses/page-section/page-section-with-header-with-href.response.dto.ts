import { ApiProperty } from '@nestjs/swagger';
import { PageSectionHeaderDto } from '~/page-sections/application/dto/page-section-header.dto';
import {
  PageSectionHeaderWithHrefResponseDto,
  pageSectionHeaderWithHrefResponseDtoStubs,
} from './page-section-header-with-href.response.dto';
import { PageSectionResponseDto } from './page-section.response.dto';

export class PageSectionWithHeaderWithHrefResponseDto extends PageSectionResponseDto {
  @ApiProperty({
    type: PageSectionHeaderWithHrefResponseDto,
    example: pageSectionHeaderWithHrefResponseDtoStubs[0],
  })
  header: PageSectionHeaderWithHrefResponseDto;

  constructor(header: PageSectionHeaderDto) {
    super(header);
    this.header.href = header.href;
  }
}

export const pageSectionResponseDtoStubs: PageSectionWithHeaderWithHrefResponseDto[] =
  [
    {
      header: pageSectionHeaderWithHrefResponseDtoStubs[0],
    },
  ];
