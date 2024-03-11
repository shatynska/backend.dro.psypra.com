import { PageSectionDto } from '~/page-sections/application/dto/page-section.dto';

export class HomeQuestionsPageSectionResponseDto extends PageSectionDto {
  constructor(section: HomeQuestionsPageSectionResponseDto) {
    super();
    Object.assign(this, section);
  }
}
