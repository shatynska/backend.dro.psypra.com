import { ApiProperty } from '@nestjs/swagger';
import {
  DimensionItemsDto,
  dimensionItemsDtoStubs,
} from '~/dimensions/application/dto/dimension-items.dto';
import { GetHomeDimensionSectionResult } from '~/dimensions/application/queries/get-home-dimension-section/get-home-dimension-section.result';
import {
  SectionHeaderWithHrefDto,
  sectionHeaderWithHrefDtoStubs,
} from '~/page-sections/application/dto/section-header-with-href.dto';

export class GetHomeDimensionSectionResponse
  implements GetHomeDimensionSectionResult
{
  @ApiProperty({
    type: () => SectionHeaderWithHrefDto,
    example: sectionHeaderWithHrefDtoStubs[1],
  })
  header: SectionHeaderWithHrefDto;

  @ApiProperty({
    type: () => DimensionItemsDto,
    example: dimensionItemsDtoStubs[0],
  })
  content: DimensionItemsDto;

  constructor(section: GetHomeDimensionSectionResult) {
    Object.assign(this, section);
  }
}
