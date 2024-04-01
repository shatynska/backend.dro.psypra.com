import { SpecialistMainDto } from './dto/specialist-main.dto';

export const READ_REPOSITORY_TOKEN = Symbol('SpecialistsReadRepositoryToken');

export interface ReadRepository {
  getSpecialistMain(alias: string): Promise<SpecialistMainDto | null>;
}
