import { DimensionItemWithAliasAndHrefDto } from '~/dimensions/application/dto/get-dimension/dimension-item-with-alias-and-link.dto';
import { HeaderWithHrefDto } from '../section/header-with-href.dto';
import { SectionDto } from '../section/section.dto';

export class HomeDimensionDto extends SectionDto<HeaderWithHrefDto> {
  content: {
    items: DimensionItemWithAliasAndHrefDto[];
  };
}
