import { DimensionItemDto } from './dto/dimension-item.dto';
import { DimensionWithItemsDto } from './dto/dimension-with-items.dto';
import { DimensionsWithItemsForSpecialistDto } from './dto/dimensions-with-items-for-specialist.dto';

export const READ_REPOSITORY_TOKEN = Symbol(
  'DimensionItemsReadRepositoryToken',
);

export interface ReadRepository {
  getDimensionItem(alias: string): Promise<DimensionItemDto>;

  getDimensionWithItems(alias: string): Promise<DimensionWithItemsDto>;

  getDimensionsWithItemsForSpecialist(
    dimensionsAliases: string[],
    specialistAlias: string,
  ): Promise<DimensionsWithItemsForSpecialistDto>;
}
