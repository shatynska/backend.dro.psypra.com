import { ApiProperty } from '@nestjs/swagger';
import {
  SectionHeaderWithParentLinkDto,
  sectionHeaderWithParentLinkDtoStubs,
} from '~/page-sections/application/dto/section-header-with-parent-link.dto';
import {
  SpecialistMainDto,
  specialistMainDtoStubs,
} from '~/specialists/application/dto/specialist-main.dto';
import { GetSpecialistMainSectionResult } from '~/specialists/application/queries/get-specialist-main-section/get-specialist-main-section.result';

export class GetSpecialistMainSectionResponse
  implements GetSpecialistMainSectionResult
{
  @ApiProperty({
    type: () => SectionHeaderWithParentLinkDto,
    example: sectionHeaderWithParentLinkDtoStubs[3],
  })
  header: SectionHeaderWithParentLinkDto;

  @ApiProperty({
    type: () => SpecialistMainDto,
    example: specialistMainDtoStubs[0],
  })
  content: SpecialistMainDto;

  constructor(section: GetSpecialistMainSectionResult) {
    Object.assign(this, section);
  }
}
