import { ApiProperty } from '@nestjs/swagger';
import {
  DimensionsWithItemsForSpecialistDto,
  dimensionsWithItemsForSpecialistDtoStubs,
} from '~/dimensions/application/dto/dimensions-with-items-for-specialist.dto';
import {
  HeaderDto,
  headerDtoStubs,
} from '~/section-headers/application/dto/header.dto';
import { GetSpecialistBriefSectionResult } from '~/specialists/application/queries/get-specialist-brief-section/get-specialist-brief-section.result';

export class GetSpecialistBriefSectionResponse
  implements GetSpecialistBriefSectionResult
{
  @ApiProperty({
    type: () => HeaderDto,
    example: headerDtoStubs[2],
  })
  header: HeaderDto;

  @ApiProperty({
    type: () => DimensionsWithItemsForSpecialistDto,
    example: dimensionsWithItemsForSpecialistDtoStubs,
  })
  content: DimensionsWithItemsForSpecialistDto;

  constructor(section: GetSpecialistBriefSectionResult) {
    Object.assign(this, section);
  }
}
