import { HeaderWithParentLinkDto } from '../section/header-with-parent-link.dto';
import { SectionDto } from '../section/section.dto';

export class SpecialistMainDto extends SectionDto<HeaderWithParentLinkDto> {
  content: {
    firstName: string;
    lastName: string;
    specialties: string[];
    phones: string[];
    emails: string[];
    websites: string[];
  };
}
