import { HeaderWithHrefDto } from './dto/header-with-href.dto';
import { HeaderDto } from './dto/header.dto';

export const READ_REPOSITORY_TOKEN = Symbol(
  'SectionHeadersReadRepositoryToken',
);

export interface ReadRepository {
  getHeader(sectionAlias: string): Promise<HeaderDto | null>;

  getHeaderWithHref(sectionAlias: string): Promise<HeaderWithHrefDto | null>;
}
