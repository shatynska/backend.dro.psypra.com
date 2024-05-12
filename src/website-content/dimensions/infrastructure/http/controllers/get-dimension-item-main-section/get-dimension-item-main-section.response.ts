import { ApiProperty } from '@nestjs/swagger';
import {
  SectionHeaderWithParentLinkDto,
  sectionHeaderWithParentLinkDtoStubs,
} from '../../../../../page-sections/application/dto/section-header-with-parent-link.dto';
import {
  DimensionItemDto,
  dimensionItemDtoStubs,
} from '../../../../application/dto/dimension-item.dto';
import { GetDimensionItemMainSectionResult } from '../../../../application/queries/get-dimension-item-main-section/get-dimension-item-main-section.result';

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
