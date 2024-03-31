import { SectionDto } from '~/page-sections/application/dto/section.dto';
import { HeaderWithParentLinkDto } from '~/section-headers/application/dto/header-with-parent-link.dto';
import { SpecialistMainDto } from '../../dto/specialist-main.dto';

export class GetSpecialistMainSectionResult extends SectionDto<
  HeaderWithParentLinkDto,
  SpecialistMainDto
> {}
