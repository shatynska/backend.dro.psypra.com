import { GetDimensionItemHandler } from './get-dimension-item/get-dimension-item.handler';
import { GetDimensionMainSectionHandler } from './get-dimension-main-section/get-dimension-main-section.handler';
import { GetDimensionWithHrefHandler } from './get-dimension-with-href/get-dimension-with-href.handler';
import { GetHomeDimensionSectionHandler } from './get-home-dimension-section/get-home-dimension-section.handler';

export const QUERIES = [
  GetDimensionItemHandler,
  GetDimensionWithHrefHandler,
  GetHomeDimensionSectionHandler,
  GetDimensionMainSectionHandler,
];
