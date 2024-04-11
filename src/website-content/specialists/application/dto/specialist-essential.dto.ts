export class SpecialistEssentialDto {
  fullName!: string;
  specialties!: string;
}

export class SpecialistEssentialWithAliasAndHrefDto extends SpecialistEssentialDto {
  alias!: string;
  href!: string;
}

export const specialistEssentialDtoStubs: SpecialistEssentialDto[] = [
  {
    fullName: 'Берчук Володимир',
    specialties: 'психолог, психотерапевт',
  },
  {
    fullName: 'Лех Наталя',
    specialties: 'психіатр, психотерапевт',
  },
  {
    fullName: 'Созанська Ірина',
    specialties: 'психотерапевт',
  },
];

export const specialistEssentialWithAliasAndHrefDtoStubs: SpecialistEssentialWithAliasAndHrefDto[] =
  [
    {
      ...specialistEssentialDtoStubs[0],
      alias: 'berchuk',
      href: '/specialists/berchuk',
    },
    {
      ...specialistEssentialDtoStubs[1],
      alias: 'lekh',
      href: '/specialists/lekh',
    },
    {
      ...specialistEssentialDtoStubs[2],
      alias: 'sozanska',
      href: '/specialists/sozanska',
    },
  ];
