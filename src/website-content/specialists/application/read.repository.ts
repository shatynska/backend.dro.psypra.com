import { GetMainParametersDto } from './dto/get-main-parameters.dto';
import { MainDto } from './dto/main.dto';

export const READ_REPOSITORY_TOKEN = Symbol('SpecialistsReadRepositoryToken');

export interface ReadRepository {
  getMain(parameters: GetMainParametersDto): Promise<MainDto | null>;
}
