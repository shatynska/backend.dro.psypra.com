import { MainDto } from '~/specialists/application/dto/main.dto';
import { HeaderWithParentLinkDto } from './section/header-with-parent-link.dto';
import { SectionDto } from './section/section.dto';

export class SpecialistMainDto extends SectionDto<HeaderWithParentLinkDto> {
  content: MainDto;
}
