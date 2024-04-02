import { SpecialistMainDto } from './dto/specialist-main.dto';
import { SpecialistsDto } from './dto/specialists.dto';

export const READ_REPOSITORY_TOKEN = Symbol('SpecialistsReadRepositoryToken');

export interface ReadRepository {
  getSpecialistMain(alias: string): Promise<SpecialistMainDto | null>;

  getSpecialists(): Promise<SpecialistsDto>;
}
