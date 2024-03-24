import { DimensionItemWithAliasAndHrefDto } from '~/dimensions/application/dto/dimension-with-items/dimension-item-with-alias-and-href.dto';
import { HeaderWithParentLinkDto } from '../section/header-with-parent-link.dto';
import { SectionDto } from '../section/section.dto';

export class DimensionMainDto extends SectionDto<HeaderWithParentLinkDto> {
  content: {
    items: DimensionItemWithAliasAndHrefDto[];
  };
}
