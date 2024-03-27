import { ApiProperty } from '@nestjs/swagger';
import { SpecialistAdditionalDto } from '~/page-sections/application/dto/specialist-additional.dto';
import { SectionResponseDto } from '../section/section.response.dto';

// TODO Add type for content, stub and example
export class SpecialistAdditionalResponseDto extends SectionResponseDto {
  @ApiProperty()
  content: any;

  constructor(section: SpecialistAdditionalDto) {
    super(section.header);
    this.content = section.content;
  }
}
