import { DimensionItemDto } from './dto/dimension-item.dto';
import { DimensionItemsDto } from './dto/dimension-items.dto';
import { DimensionsWithItemsForSpecialistDto } from './dto/dimensions-with-items-for-specialist.dto';

export const READ_REPOSITORY_TOKEN = Symbol(
  'DimensionItemsReadRepositoryToken',
);

export interface ReadRepository {
  getDimensionItem(alias: string): Promise<DimensionItemDto>;

  getDimensionItemsByDimensionAlias(
    dimensionAlias: string,
  ): Promise<DimensionItemsDto | null>;

  getDimensionsWithItemsForSpecialist(
    dimensionsAliases: string[],
    specialistAlias: string,
  ): Promise<DimensionsWithItemsForSpecialistDto>;
}
