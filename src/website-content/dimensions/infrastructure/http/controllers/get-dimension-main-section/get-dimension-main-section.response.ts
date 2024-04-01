import { ApiProperty } from '@nestjs/swagger';
import {
  DimensionItemsDto,
  dimensionItemsDtoStubs,
} from '~/dimensions/application/dto/dimension-items.dto';
import { GetDimensionMainSectionResult } from '~/dimensions/application/queries/get-dimension-main-section/get-dimension-main-section.result';
import {
  SectionHeaderWithParentLinkDto,
  sectionHeaderWithParentLinkDtoStubs,
} from '~/page-sections/application/dto/section-header-with-parent-link.dto';

export class GetDimensionMainSectionResponse
  implements GetDimensionMainSectionResult
{
  @ApiProperty({
    type: () => SectionHeaderWithParentLinkDto,
    example: sectionHeaderWithParentLinkDtoStubs[0],
  })
  header: SectionHeaderWithParentLinkDto;

  @ApiProperty({
    type: () => DimensionItemsDto,
    example: dimensionItemsDtoStubs[0],
  })
  content: DimensionItemsDto;

  constructor(section: GetDimensionMainSectionResult) {
    Object.assign(this, section);
  }
}
