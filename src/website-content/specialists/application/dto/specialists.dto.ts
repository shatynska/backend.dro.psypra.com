import {
  SpecialistEssentialWithAliasAndHrefDto,
  specialistEssentialWithAliasAndHrefDtoStubs,
} from './specialist-essential.dto';

export class SpecialistsDto {
  specialists: SpecialistEssentialWithAliasAndHrefDto[];
}

export const specialistsDtoStubs: SpecialistsDto[] = [
  {
    specialists: specialistEssentialWithAliasAndHrefDtoStubs,
  },
];
