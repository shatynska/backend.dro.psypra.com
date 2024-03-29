import { HomeQuestionsContentItemDto } from './dto/home-questions/home-questions-content-item.dto';

export const READ_REPOSITORY_TOKEN = Symbol('PageSectionsReadRepositoryToken');

export interface ReadRepository {
  getHomeQuestionsContentItems(): Promise<HomeQuestionsContentItemDto[]>;
}
