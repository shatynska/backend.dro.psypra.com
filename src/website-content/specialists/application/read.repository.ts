import { BriefDimensionItemsDto } from './dto/brief/brief-dimension-items.dto';
import { MainDto } from './dto/main.dto';

export const READ_REPOSITORY_TOKEN = Symbol('SpecialistsReadRepositoryToken');

export interface ReadRepository {
  getMain(alias: string): Promise<MainDto | null>;

  getBriefDimensionItems(
    specialistAlias: string,
    dimensionAlias: string,
  ): Promise<BriefDimensionItemsDto | null>;
}
