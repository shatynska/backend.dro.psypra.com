import { GetDimensionItemMainSectionHandler } from './get-dimension-item-main-section/get-dimension-item-main-section.handler';
import { GetDimensionMainSectionHandler } from './get-dimension-main-section/get-dimension-main-section.handler';
import { GetDimensionsWithItemsForSpecialistHandler } from './get-dimensions-with-items-for-specialist/get-dimensions-with-items-for-specialist.handler';
import { GetHomeDimensionSectionHandler } from './get-home-dimension-section/get-home-dimension-section.handler';

export const QUERIES = [
  GetHomeDimensionSectionHandler,
  GetDimensionMainSectionHandler,
  GetDimensionItemMainSectionHandler,
  GetDimensionsWithItemsForSpecialistHandler,
];
