import { SectionDto } from '~/page-sections/application/dto/section.dto';
import { HeaderDto } from '~/section-headers/application/dto/header.dto';
import { SpecialistBriefDto } from '../../dto/specialist-brief/specialist-brief.dto';

export class GetSpecialistBriefSectionResult extends SectionDto<
  HeaderDto,
  SpecialistBriefDto
> {}
