import { DimensionItemWithAliasAndHrefDto } from '~/dimensions/application/dto/get-dimension/dimension-item-with-alias-and-link.dto';
import { HeaderWithParentLinkDto } from '../section/header-with-parent-link.dto';
import { SectionDto } from '../section/section.dto';

export class DimensionMainDto extends SectionDto<HeaderWithParentLinkDto> {
  content: {
    items: DimensionItemWithAliasAndHrefDto[];
  };
}
