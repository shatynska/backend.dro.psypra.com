import { ApiProperty } from '@nestjs/swagger';
import {
  DimensionItemsDto,
  dimensionItemsDtoStubs,
} from '~/dimensions/application/dto/dimension-items.dto';
import { GetDimensionMainSectionResult } from '~/page-sections/application/queries/get-dimension-main/get-dimension-main-section.result';
import {
  HeaderWithParentLinkDto,
  headerWithParentLinkDtoStubs,
} from '~/section-headers/application/dto/header-with-parent-link.dto';

export class DimensionMainResponseDto implements GetDimensionMainSectionResult {
  @ApiProperty({
    type: () => HeaderWithParentLinkDto,
    example: headerWithParentLinkDtoStubs[0],
  })
  header: HeaderWithParentLinkDto;

  @ApiProperty({
    type: () => DimensionItemsDto,
    example: dimensionItemsDtoStubs[0],
  })
  content: DimensionItemsDto;

  constructor(section: GetDimensionMainSectionResult) {
    Object.assign(this, section);
  }
}
