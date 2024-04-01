import { DimensionsWithItemsForSpecialistDto } from '~/dimensions/application/dto/dimensions-with-items-for-specialist.dto';
import { SectionDto } from '~/page-sections/application/dto/section.dto';
import { HeaderDto } from '~/section-headers/application/dto/header.dto';

export class GetSpecialistBriefSectionResult extends SectionDto<
  HeaderDto,
  DimensionsWithItemsForSpecialistDto
> {}
