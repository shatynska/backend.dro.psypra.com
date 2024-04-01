import { ApiProperty } from '@nestjs/swagger';
import {
  DimensionItemsDto,
  dimensionItemsDtoStubs,
} from '~/dimensions/application/dto/dimension-items.dto';
import { GetHomeDimensionSectionResult } from '~/dimensions/application/queries/get-home-dimension-section/get-home-dimension-section.result';
import {
  HeaderWithHrefDto,
  headerWithHrefDtoStubs,
} from '~/section-headers/application/dto/header-with-href.dto';

export class GetHomeDimensionSectionResponse
  implements GetHomeDimensionSectionResult
{
  @ApiProperty({
    type: () => HeaderWithHrefDto,
    example: headerWithHrefDtoStubs[1],
  })
  header: HeaderWithHrefDto;

  @ApiProperty({
    type: () => DimensionItemsDto,
    example: dimensionItemsDtoStubs[0],
  })
  content: DimensionItemsDto;

  constructor(section: GetHomeDimensionSectionResult) {
    Object.assign(this, section);
  }
}
