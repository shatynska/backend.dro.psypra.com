import { DimensionsWithItemsForSpecialistDto } from '~/dimensions/application/dto/dimensions-with-items-for-specialist.dto';
import { SectionHeaderDto } from '~/page-sections/application/dto/section-header.dto';
import { SectionDto } from '~/page-sections/application/dto/section.dto';

export class GetSpecialistBriefSectionResult extends SectionDto<
  SectionHeaderDto,
  DimensionsWithItemsForSpecialistDto
> {}
