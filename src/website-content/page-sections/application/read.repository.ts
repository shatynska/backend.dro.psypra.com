import { HomeQuestionsDto } from './dto/home-questions.dto';

export const READ_REPOSITORY_TOKEN = Symbol('PageSectionsReadRepositoryToken');

export interface ReadRepository {
  getHomeQuestions(): Promise<HomeQuestionsDto>;
}
