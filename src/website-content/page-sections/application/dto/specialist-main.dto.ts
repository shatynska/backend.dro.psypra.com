import { HeaderWithParentLinkDto } from '~/section-headers/application/dto/header-with-parent-link.dto';
import { MainDto } from '~/specialists/application/dto/main.dto';
import { SectionDto } from './section/section.dto';

export class SpecialistMainDto extends SectionDto<HeaderWithParentLinkDto> {
  content: MainDto;
}
