import { GetHomeQuestionsSectionHandler } from './get-home-questions/get-home-questions-section.handler';
import { GetSectionHeaderWithHrefHandler } from './get-section-header-with-href/get-section-header-with-href.handler';
import { GetSectionHeaderHandler } from './get-section-header/get-section-header.handler';

export const QUERIES = [
  GetSectionHeaderHandler,
  GetSectionHeaderWithHrefHandler,
  GetHomeQuestionsSectionHandler,
];
