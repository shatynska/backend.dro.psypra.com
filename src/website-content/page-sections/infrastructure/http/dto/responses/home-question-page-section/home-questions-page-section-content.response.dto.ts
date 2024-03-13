import { ApiProperty } from '@nestjs/swagger';
import {
  HomeQuestionsPageSectionContentItemResponseDto,
  homeQuestionsPageSectionContentItemResponseDtoStubs,
} from './home-questions-page-section-content-item.response.dto';

export class HomeQuestionsPageSectionContentResponseDto {
  @ApiProperty({
    example: homeQuestionsPageSectionContentItemResponseDtoStubs,
  })
  items: HomeQuestionsPageSectionContentItemResponseDto[];
}

export const homeQuestionsPageSectionContentResponseDtoStubs: HomeQuestionsPageSectionContentResponseDto[] =
  [
    {
      items: homeQuestionsPageSectionContentItemResponseDtoStubs,
    },
  ];
