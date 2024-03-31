import { ApiProperty } from '@nestjs/swagger';
import {
  DimensionItemsDto,
  dimensionItemsDtoStubs,
} from '~/dimensions/application/dto/dimension-items.dto';
import { DimensionMainDto } from '~/page-sections/application/dto/dimension-main/dimension-main.dto';
import {
  HeaderWithParentLinkDto,
  headerWithParentLinkDtoStubs,
} from '~/section-headers/application/dto/header-with-parent-link.dto';

export class DimensionMainResponseDto implements DimensionMainDto {
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

  constructor(section: DimensionMainDto) {
    Object.assign(this, section);
  }
}
