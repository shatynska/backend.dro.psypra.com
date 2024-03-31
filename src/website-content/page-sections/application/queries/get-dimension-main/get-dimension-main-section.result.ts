import { DimensionItemsDto } from '~/dimensions/application/dto/dimension-items.dto';
import { HeaderWithParentLinkDto } from '~/section-headers/application/dto/header-with-parent-link.dto';
import { SectionDto } from '../../dto/section.dto';

export class GetDimensionMainSectionResult extends SectionDto<
  HeaderWithParentLinkDto,
  DimensionItemsDto
> {}
