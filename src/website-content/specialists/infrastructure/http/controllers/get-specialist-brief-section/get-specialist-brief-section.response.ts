import { ApiProperty } from '@nestjs/swagger';
import {
  DimensionsWithItemsForSpecialistDto,
  dimensionsWithItemsForSpecialistDtoStubs,
} from '../../../../../dimensions/application/dto/dimensions-with-items-for-specialist.dto';
import {
  SectionHeaderDto,
  sectionHeaderDtoStubs,
} from '../../../../../page-sections/application/dto/section-header.dto';

import { GetSpecialistBriefSectionResult } from '../../../../application/queries/get-specialist-brief-section/get-specialist-brief-section.result';

export class GetSpecialistBriefSectionResponse
  implements GetSpecialistBriefSectionResult
{
  @ApiProperty({
    type: () => SectionHeaderDto,
    example: sectionHeaderDtoStubs[2],
  })
  header!: SectionHeaderDto;

  @ApiProperty({
    type: () => DimensionsWithItemsForSpecialistDto,
    example: dimensionsWithItemsForSpecialistDtoStubs,
  })
  content!: DimensionsWithItemsForSpecialistDto;

  constructor(section: GetSpecialistBriefSectionResult) {
    Object.assign(this, section);
  }
}
