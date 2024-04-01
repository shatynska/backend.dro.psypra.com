import { DimensionItem } from '@prisma/client';
import { DimensionItemDto } from '~/dimensions/application/dto/dimension-item.dto';

type Props = Pick<DimensionItem, 'title' | 'description'>;

export class DimensionItemMapper {
  static mapToDto(data: Props): DimensionItemDto {
    const mappedData = {
      title: data.title.charAt(0).toUpperCase() + data.title.slice(1),
      description: `/${data.description}`,
    };

    return mappedData;
  }
}
