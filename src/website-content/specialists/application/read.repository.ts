import { SpecialistBriefDimensionItemsDto } from './dto/specialist-brief.dto';
import { SpecialistMainDto } from './dto/specialist-main.dto';

export const READ_REPOSITORY_TOKEN = Symbol('SpecialistsReadRepositoryToken');

export interface ReadRepository {
  getSpecialistMain(alias: string): Promise<SpecialistMainDto | null>;

  getSpecialistBriefDimensionItems(
    specialistAlias: string,
    dimensionAlias: string,
  ): Promise<SpecialistBriefDimensionItemsDto | null>;
}
