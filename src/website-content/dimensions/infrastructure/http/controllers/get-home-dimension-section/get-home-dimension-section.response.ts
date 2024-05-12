import { ApiProperty } from '@nestjs/swagger';
import {
  SectionHeaderWithHrefDto,
  sectionHeaderWithHrefDtoStubs,
} from '../../../../../page-sections/application/dto/section-header-with-href.dto';
import {
  DimensionItemsDto,
  dimensionItemsDtoStubs,
} from '../../../../application/dto/dimension-items.dto';
import { GetHomeDimensionSectionResult } from '../../../../application/queries/get-home-dimension-section/get-home-dimension-section.result';

export class GetHomeDimensionSectionResponse
  implements GetHomeDimensionSectionResult
{
  @ApiProperty({
    type: () => SectionHeaderWithHrefDto,
    example: sectionHeaderWithHrefDtoStubs[1],
  })
  header!: SectionHeaderWithHrefDto;

  @ApiProperty({
    type: () => DimensionItemsDto,
    example: dimensionItemsDtoStubs[0],
  })
  content!: DimensionItemsDto;

  constructor(section: GetHomeDimensionSectionResult) {
    Object.assign(this, section);
  }
}
