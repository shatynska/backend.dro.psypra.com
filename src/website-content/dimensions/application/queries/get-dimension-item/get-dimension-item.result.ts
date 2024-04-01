import { SectionHeaderWithParentLinkDto } from '~/page-sections/application/dto/section-header-with-parent-link.dto';
import { SectionDto } from '~/page-sections/application/dto/section.dto';
import { DimensionItemDto } from '../../dto/dimension-item.dto';

export class GetDimensionItemResult extends SectionDto<
  SectionHeaderWithParentLinkDto,
  DimensionItemDto
> {}
