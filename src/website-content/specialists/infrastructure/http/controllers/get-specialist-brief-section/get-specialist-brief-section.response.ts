import { ApiProperty } from '@nestjs/swagger';
import {
  HeaderDto,
  headerDtoStubs,
} from '~/section-headers/application/dto/header.dto';
import { SpecialistBriefDto } from '~/specialists/application/dto/specialist-brief/specialist-brief.dto';
import { GetSpecialistBriefSectionResult } from '~/specialists/application/queries/get-specialist-brief-section/get-specialist-brief-section.result';

export class GetSpecialistBriefSectionResponse
  implements GetSpecialistBriefSectionResult
{
  @ApiProperty({ type: () => HeaderDto, example: headerDtoStubs[5] })
  header: HeaderDto;

  @ApiProperty({ type: () => SpecialistBriefDto })
  content: SpecialistBriefDto;

  constructor(section: GetSpecialistBriefSectionResult) {
    Object.assign(this, section);
  }
}
