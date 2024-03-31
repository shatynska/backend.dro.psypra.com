import { DimensionItemsDto } from '~/dimensions/application/dto/dimension-items.dto';
import { SectionDto } from '~/page-sections/application/dto/section.dto';
import { HeaderDto } from '~/section-headers/application/dto/header.dto';

export class GetHomeDimensionSectionResult extends SectionDto<
  HeaderDto,
  DimensionItemsDto
> {}
