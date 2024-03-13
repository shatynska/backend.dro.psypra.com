import { ApiProperty } from '@nestjs/swagger';
import { PageSectionHeaderDto } from '~/page-sections/application/dto/page-section-header.dto';
import {
  PageSectionHeaderResponseDto,
  pageSectionHeaderResponseDtoStubs,
} from './page-section-header.response.dto';

export class PageSectionResponseDto {
  @ApiProperty({ example: pageSectionHeaderResponseDtoStubs[0] })
  header: PageSectionHeaderResponseDto;

  constructor(header: PageSectionHeaderDto) {
    this.header = {
      headings: {
        primary: header.primaryHeading,
        secondary: header.secondaryHeading,
      },
    };
  }
}

export const pageSectionResponseDtoStubs: PageSectionResponseDto[] = [
  {
    header: pageSectionHeaderResponseDtoStubs[0],
  },
];
