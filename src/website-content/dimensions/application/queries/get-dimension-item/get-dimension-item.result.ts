import { SectionDto } from '~/page-sections/application/dto/section.dto';
import { HeaderWithParentLinkDto } from '~/section-headers/application/dto/header-with-parent-link.dto';
import { DimensionItemDto } from '../../dto/dimension-item.dto';

export class GetDimensionItemResult extends SectionDto<
  HeaderWithParentLinkDto,
  DimensionItemDto
> {}
