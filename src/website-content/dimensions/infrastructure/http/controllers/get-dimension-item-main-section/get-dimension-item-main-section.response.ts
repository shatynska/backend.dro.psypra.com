import { ApiProperty } from '@nestjs/swagger';
import {
  DimensionItemDto,
  dimensionItemDtoStubs,
} from '~/dimensions/application/dto/dimension-item.dto';
import { GetDimensionItemMainSectionResult } from '~/dimensions/application/queries/get-dimension-item-main-section/get-dimension-item-main-section.result';
import {
  SectionHeaderWithParentLinkDto,
  sectionHeaderWithParentLinkDtoStubs,
} from '~/page-sections/application/dto/section-header-with-parent-link.dto';

export class GetDimensionItemMainSectionResponse
  implements GetDimensionItemMainSectionResult
{
  @ApiProperty({
    type: () => SectionHeaderWithParentLinkDto,
    example: sectionHeaderWithParentLinkDtoStubs[0],
  })
  header!: SectionHeaderWithParentLinkDto;

  @ApiProperty({
    type: () => DimensionItemDto,
    example: dimensionItemDtoStubs[0],
  })
  content!: DimensionItemDto;

  constructor(section: GetDimensionItemMainSectionResult) {
    Object.assign(this, section);
  }
}
