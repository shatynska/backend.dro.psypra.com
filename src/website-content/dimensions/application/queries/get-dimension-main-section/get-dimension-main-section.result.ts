import { DimensionItemsDto } from '~/dimensions/application/dto/dimension-items.dto';
import { SectionHeaderWithParentLinkDto } from '~/page-sections/application/dto/section-header-with-parent-link.dto';
import { SectionDto } from '~/page-sections/application/dto/section.dto';

export class GetDimensionMainSectionResult extends SectionDto<
  SectionHeaderWithParentLinkDto,
  DimensionItemsDto
> {}
