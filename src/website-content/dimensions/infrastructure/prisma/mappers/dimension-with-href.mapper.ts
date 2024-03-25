import { Dimension } from '@prisma/client';
import { DimensionWithHrefDto } from '~/dimensions/application/dto/dimension-with-href/dimension-with-href.dto';

type Props = Pick<Dimension, 'alias' | 'title'>;

export class DimensionWithHrefMapper {
  static mapToDto(data: Props): DimensionWithHrefDto {
    const mappedData = {
      title: data.title,
      href: `/${data.alias}`,
    };

    return mappedData;
  }
}
