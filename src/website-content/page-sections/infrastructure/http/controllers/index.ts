import { GetDimensionMainController } from './get-dimension-main/get-dimension-main.controller';
import { GetHomeDimensionController } from './get-home-dimension/get-home-dimension.controller';
import { GetHomeQuestionsController } from './get-home-questions/get-home-questions.controller';
import { GetSpecialistBriefController } from './get-specialist-brief/get-specialist-brief.controller';
import { GetSpecialistMainController } from './get-specialist-main/get-specialist-main.controller';

export const CONTROLLERS = [
  GetHomeQuestionsController,
  GetHomeDimensionController,
  GetDimensionMainController,
  GetSpecialistMainController,
  GetSpecialistBriefController,
];
