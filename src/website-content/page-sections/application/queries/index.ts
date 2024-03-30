import { GetDimensionMainHandler } from './get-dimension-main/get-dimension-main.handler';
import { GetHomeDimensionHandler } from './get-home-dimension/get-home-dimension.handler';
import { GetHomeQuestionsHandler } from './get-home-questions/get-home-questions.handler';

export const QUERIES = [
  GetHomeQuestionsHandler,
  GetHomeDimensionHandler,
  GetDimensionMainHandler,
];
