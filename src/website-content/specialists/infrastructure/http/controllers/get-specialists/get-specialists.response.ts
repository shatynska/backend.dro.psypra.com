import { ApiProperty } from '@nestjs/swagger';
import {
  SpecialistEssentialWithAliasAndHrefDto,
  specialistEssentialWithAliasAndHrefDtoStubs,
} from '~/specialists/application/dto/specialist-essential.dto';
import { GetSpecialistsResult } from '~/specialists/application/queries/get-specialists/get-specialists.result';

export class GetSpecialistsResponse extends GetSpecialistsResult {
  @ApiProperty({
    isArray: true,
    example: specialistEssentialWithAliasAndHrefDtoStubs,
  })
  specialists: SpecialistEssentialWithAliasAndHrefDto[];

  constructor(specialists: GetSpecialistsResult) {
    super();
    Object.assign(this, specialists);
  }
}
