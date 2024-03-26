import { BriefDto } from '~/specialists/application/dto/brief/brief.dto';
import { HeaderDto } from '../section/header.dto';
import { SectionDto } from '../section/section.dto';

export class SpecialistBriefDto extends SectionDto<HeaderDto> {
  content: BriefDto;
}
