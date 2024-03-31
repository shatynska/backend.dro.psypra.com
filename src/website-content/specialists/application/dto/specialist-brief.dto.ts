export class SpecialistBriefDto {
  specialties: SpecialistBriefDimensionDto;
  forms: SpecialistBriefDimensionDto;
  ages: SpecialistBriefDimensionDto;
  terms: SpecialistBriefDimensionDto;
  approaches: SpecialistBriefDimensionDto;
  rates: SpecialistBriefDimensionDto;
}

export class SpecialistBriefDimensionItemsDto {
  items: string[];
}

export class SpecialistBriefDimensionDto extends SpecialistBriefDimensionItemsDto {
  title: string;
  href: string;
}
