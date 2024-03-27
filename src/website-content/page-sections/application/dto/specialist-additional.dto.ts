import { HeaderDto } from './section/header.dto';
import { SectionDto } from './section/section.dto';

// TODO Define content type
export class SpecialistAdditionalDto extends SectionDto<HeaderDto> {
  content: any;
}
