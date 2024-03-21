import { ApiProperty } from '@nestjs/swagger';
import {
  HomeQuestionsContentItemResponseDto,
  homeQuestionsContentItemResponseDtoStubs,
} from './home-questions-content-item.response.dto';

export class HomeQuestionsContentResponseDto {
  @ApiProperty({
    example: homeQuestionsContentItemResponseDtoStubs,
  })
  items: HomeQuestionsContentItemResponseDto[];
}

export const homeQuestionsContentResponseDtoStubs: HomeQuestionsContentResponseDto[] =
  [
    {
      items: homeQuestionsContentItemResponseDtoStubs,
    },
  ];
