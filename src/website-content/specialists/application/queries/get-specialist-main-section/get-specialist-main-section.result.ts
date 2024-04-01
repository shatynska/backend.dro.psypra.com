import { SectionHeaderWithParentLinkDto } from '~/page-sections/application/dto/section-header-with-parent-link.dto';
import { SectionDto } from '~/page-sections/application/dto/section.dto';
import { SpecialistMainDto } from '../../dto/specialist-main.dto';

export class GetSpecialistMainSectionResult extends SectionDto<
  SectionHeaderWithParentLinkDto,
  SpecialistMainDto
> {}
