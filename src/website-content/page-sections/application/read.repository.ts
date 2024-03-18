import { GetSectionParametersDto } from './dto/get-section-parameters.dto';
import { HeaderDto } from './dto/header.dto';
import { HomeQuestionsContentItemDto } from './dto/home-questions-content-item.dto';

export const READ_REPOSITORY_TOKEN = Symbol('PageSectionsReadRepositoryToken');

export interface ReadRepository {
  getHomeQuestionsContentItems(): Promise<HomeQuestionsContentItemDto[]>;

  getHeader({
    page,
    section,
  }: GetSectionParametersDto): Promise<HeaderDto | null>;

  getHeaderWithParentLink({
    page,
    section,
  }: GetSectionParametersDto): Promise<HeaderDto | null>;
}
