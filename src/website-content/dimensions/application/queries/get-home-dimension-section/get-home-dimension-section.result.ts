import { SectionHeaderWithHrefDto } from '../../../../page-sections/application/dto/section-header-with-href.dto';
import { SectionDto } from '../../../../page-sections/application/dto/section.dto';
import { DimensionItemsDto } from '../../../application/dto/dimension-items.dto';

export class GetHomeDimensionSectionResult extends SectionDto<
  SectionHeaderWithHrefDto,
  DimensionItemsDto
> {}
