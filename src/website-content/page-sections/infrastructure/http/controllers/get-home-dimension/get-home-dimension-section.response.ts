import { ApiProperty } from '@nestjs/swagger';
import {
  DimensionItemsDto,
  dimensionItemsDtoStubs,
} from '~/dimensions/application/dto/dimension-items.dto';
import { GetHomeDimensionSectionResult } from '~/page-sections/application/queries/get-home-dimension/get-home-dimension-section.result';
import {
  HeaderDto,
  headerDtoStubs,
} from '~/section-headers/application/dto/header.dto';

export class GetHomeDimensionSectionResponse
  implements GetHomeDimensionSectionResult
{
  @ApiProperty({
    type: () => HeaderDto,
    example: headerDtoStubs[1],
  })
  header: HeaderDto;

  @ApiProperty({
    type: () => DimensionItemsDto,
    example: dimensionItemsDtoStubs[0],
  })
  content: DimensionItemsDto;

  constructor(section: GetHomeDimensionSectionResult) {
    Object.assign(this, section);
  }
}
