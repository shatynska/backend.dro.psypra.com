import { ApiProperty } from '@nestjs/swagger';
import { HomeQuestionsPageSectionDto } from '~/page-sections/application/dto/home-questions-page-section.dto';
import { pageSectionHeaderWithHrefResponseDtoStubs } from '../page-section/page-section-header-with-href.response.dto';
import { PageSectionWithHeaderWithHrefResponseDto } from '../page-section/page-section-with-header-with-href.response.dto';
import {
  HomeQuestionsPageSectionContentResponseDto,
  homeQuestionsPageSectionContentResponseDtoStubs,
} from './home-questions-page-section-content.response.dto';

export class HomeQuestionsPageSectionResponseDto extends PageSectionWithHeaderWithHrefResponseDto {
  @ApiProperty({ example: homeQuestionsPageSectionContentResponseDtoStubs[0] })
  content: HomeQuestionsPageSectionContentResponseDto;

  constructor(section: HomeQuestionsPageSectionDto) {
    super(section.pageSectionHeader);
    this.content = section.pageSectionContent;
  }
}

export const homeQuestionsPageSectionResponseDtoStubs: HomeQuestionsPageSectionResponseDto[] =
  [
    {
      header: pageSectionHeaderWithHrefResponseDtoStubs[0],
      content: homeQuestionsPageSectionContentResponseDtoStubs[0],
    },
  ];
