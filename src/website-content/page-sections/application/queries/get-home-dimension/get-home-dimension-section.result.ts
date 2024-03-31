import { DimensionItemsDto } from '~/dimensions/application/dto/dimension-items.dto';
import { HeaderDto } from '~/section-headers/application/dto/header.dto';
import { SectionDto } from '../../dto/section.dto';

export class GetHomeDimensionSectionResult extends SectionDto<
  HeaderDto,
  DimensionItemsDto
> {}
