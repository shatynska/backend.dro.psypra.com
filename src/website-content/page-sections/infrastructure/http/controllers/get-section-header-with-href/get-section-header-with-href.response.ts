import { ApiProperty } from '@nestjs/swagger';
import {
  SectionHeadingsDto,
  sectionHeadingsDtoStubs,
} from '../../../../application/dto/section-header.dto';
import { GetSectionHeaderWithHrefResult } from '../../../../application/queries/get-section-header-with-href/get-section-header-with-href.result';

export class GetSectionHeaderWithHrefResponse extends GetSectionHeaderWithHrefResult {
  @ApiProperty({ example: sectionHeadingsDtoStubs[3] })
  headings!: SectionHeadingsDto;

  @ApiProperty({ example: '/specialists' })
  href!: string;
  constructor(header: GetSectionHeaderWithHrefResult) {
    super();
    Object.assign(this, header);
  }
}
