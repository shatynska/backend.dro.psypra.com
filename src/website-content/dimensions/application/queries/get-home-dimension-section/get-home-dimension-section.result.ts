import { DimensionItemsDto } from '~/dimensions/application/dto/dimension-items.dto';
import { SectionDto } from '~/page-sections/application/dto/section.dto';
import { HeaderWithHrefDto } from '~/section-headers/application/dto/header-with-href.dto';

export class GetHomeDimensionSectionResult extends SectionDto<
  HeaderWithHrefDto,
  DimensionItemsDto
> {}
