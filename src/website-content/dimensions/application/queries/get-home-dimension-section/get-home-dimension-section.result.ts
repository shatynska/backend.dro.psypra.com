import { DimensionItemsDto } from '~/dimensions/application/dto/dimension-items.dto';
import { SectionHeaderWithHrefDto } from '~/page-sections/application/dto/section-header-with-href.dto';
import { SectionDto } from '~/page-sections/application/dto/section.dto';

export class GetHomeDimensionSectionResult extends SectionDto<
  SectionHeaderWithHrefDto,
  DimensionItemsDto
> {}
