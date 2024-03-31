import { DimensionItemsDto } from '~/dimensions/application/dto/dimension-items.dto';
import { SectionDto } from '~/page-sections/application/dto/section.dto';
import { HeaderWithParentLinkDto } from '~/section-headers/application/dto/header-with-parent-link.dto';

export class GetDimensionMainSectionResult extends SectionDto<
  HeaderWithParentLinkDto,
  DimensionItemsDto
> {}
