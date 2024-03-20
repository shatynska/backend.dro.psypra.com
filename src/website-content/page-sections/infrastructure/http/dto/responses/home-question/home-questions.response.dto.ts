import { ApiProperty } from '@nestjs/swagger';
import { HomeQuestionsDto } from '~/page-sections/application/dto/home-questions/home-questions.dto';
import { SectionWithHeaderWithHrefResponseDto } from '../section/section-with-header-with-href.response.dto';
import {
  HomeQuestionsContentResponseDto,
  homeQuestionsContentResponseDtoStubs,
} from './home-questions-content.response.dto';
import { headerWithHrefResponseDtoStubs } from '../section/header-with-href.response.dto';

export class HomeQuestionsResponseDto extends SectionWithHeaderWithHrefResponseDto {
  @ApiProperty({ example: homeQuestionsContentResponseDtoStubs[0] })
  content: HomeQuestionsContentResponseDto;

  constructor(section: HomeQuestionsDto) {
    super(section.header);
    this.content = section.content;
  }
}

export const homeQuestionsResponseDtoStubs: HomeQuestionsResponseDto[] = [
  {
    header: headerWithHrefResponseDtoStubs[0],
    content: homeQuestionsContentResponseDtoStubs[0],
  },
];
