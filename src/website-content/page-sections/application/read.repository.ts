import { HomeQuestionsContentItemDto } from './dto/home-questions/home-questions-content-item.dto';
import { GetSectionParametersDto } from './dto/section/get-section-parameters.dto';
import { HeaderWithParentLinkDto } from './dto/section/header-with-parent-link.dto';
import { HeaderDto } from './dto/section/header.dto';

export const READ_REPOSITORY_TOKEN = Symbol('PageSectionsReadRepositoryToken');

export interface ReadRepository {
  getHomeQuestionsContentItems(): Promise<HomeQuestionsContentItemDto[]>;

  getHeader(parameters: GetSectionParametersDto): Promise<HeaderDto | null>;

  getHeaderWithParentLink(
    parameters: GetSectionParametersDto,
  ): Promise<HeaderWithParentLinkDto | null>;
}
