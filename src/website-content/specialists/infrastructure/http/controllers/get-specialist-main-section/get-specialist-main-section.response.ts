import { ApiProperty } from '@nestjs/swagger';
import {
  HeaderWithParentLinkDto,
  headerWithParentLinkDtoStubs,
} from '~/section-headers/application/dto/header-with-parent-link.dto';
import { SpecialistMainDto } from '~/specialists/application/dto/specialist-main.dto';
import { GetSpecialistMainSectionResult } from '~/specialists/application/queries/get-specialist-main-section/get-specialist-main-section.result';

export class GetSpecialistMainSectionResponse
  implements GetSpecialistMainSectionResult
{
  @ApiProperty({
    type: () => HeaderWithParentLinkDto,
    example: headerWithParentLinkDtoStubs[3],
  })
  header: HeaderWithParentLinkDto;

  @ApiProperty({ type: () => SpecialistMainDto })
  content: SpecialistMainDto;

  constructor(section: GetSpecialistMainSectionResult) {
    Object.assign(this, section);
  }
}
