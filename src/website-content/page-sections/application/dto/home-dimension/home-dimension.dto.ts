import { DimensionItemWithAliasAndHrefDto } from '~/dimensions/application/dto/dimension-item-with-alias-and-href.dto';
import { HeaderDto } from '~/section-headers/application/dto/header.dto';
import { SectionDto } from '../section.dto';

export class HomeDimensionDto extends SectionDto<HeaderDto, any> {
  content: {
    items: DimensionItemWithAliasAndHrefDto[];
  };
}
