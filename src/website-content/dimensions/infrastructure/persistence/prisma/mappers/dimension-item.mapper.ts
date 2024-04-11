import { DimensionItem } from '@prisma/client';
import { DimensionItemDto } from '~/dimensions/application/dto/dimension-item.dto';

type Parameters = Pick<DimensionItem, 'title' | 'description'>;

export class DimensionItemMapper {
  static mapToDto({ title, description }: Parameters): DimensionItemDto {
    return {
      title: title.charAt(0).toUpperCase() + title.slice(1),
      description: description ?? undefined,
    };
  }
}
