export class DimensionsWithItemsForSpecialistDto {
  dimensions!: DimensionWithItemsForSpecialistDto[];
}

export class DimensionWithItemsForSpecialistDto {
  alias!: string;
  title!: string;
  items!: string[];
}

export const dimensionWithItemsForSpecialistDtoStubs: DimensionWithItemsForSpecialistDto[] =
  [
    {
      alias: 'specialties',
      title: 'Спеціальності',
      items: ['психолог', 'психотерапевт'],
    },
    {
      alias: 'forms',
      title: 'Форми роботи',
      items: ['індивідуальна', 'сімейна'],
    },
    {
      alias: 'ages',
      title: 'Вікові групи',
      items: ['18+', '40+', '60+'],
    },
    {
      alias: 'terms',
      title: 'Тривалість',
      items: ['разові консультації'],
    },
    {
      alias: 'approaches',
      title: 'Напрями терапії',
      items: [],
    },
  ];

export const dimensionsWithItemsForSpecialistDtoStubs: DimensionsWithItemsForSpecialistDto[] =
  [{ dimensions: dimensionWithItemsForSpecialistDtoStubs }];
