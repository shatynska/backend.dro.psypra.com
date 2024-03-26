import { DimensionItemWithAliasAndHrefDto } from '~/dimensions/application/dto/dimension-item-with-alias-and-href.dto';
import { HeaderWithHrefDto } from '../section/header-with-href.dto';
import { SectionDto } from '../section/section.dto';

export class HomeDimensionDto extends SectionDto<HeaderWithHrefDto> {
  content: {
    items: DimensionItemWithAliasAndHrefDto[];
  };
}
