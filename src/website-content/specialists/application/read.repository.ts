import { BriefDimensionItemsDto } from './dto/brief/brief-dimension-items.dto';
import { GetBriefDimensionItemsParametersDto } from './dto/brief/get-brief-dimension-items.parameters.dto';
import { GetSpecialistParametersDto } from './dto/get-specialist-parameters.dto';
import { MainDto } from './dto/main.dto';

export const READ_REPOSITORY_TOKEN = Symbol('SpecialistsReadRepositoryToken');

export interface ReadRepository {
  getMain(parameters: GetSpecialistParametersDto): Promise<MainDto | null>;

  getBriefDimensionItems(
    parameters: GetBriefDimensionItemsParametersDto,
  ): Promise<BriefDimensionItemsDto | null>;
}
