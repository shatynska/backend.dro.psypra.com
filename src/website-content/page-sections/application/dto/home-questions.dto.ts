export class HomeQuestionsDto {
  items!: HomeQuestionsItemDto[];
}

export class HomeQuestionsItemDto {
  title!: string;
  href!: string;
}

export const homeQuestionsItemDtoStubs: HomeQuestionsItemDto[] = [
  { title: 'До кого звернутися?', href: '/specialists' },
  { title: 'З ким працюють?', href: '/ages' },
];

export const homeQuestionsDtoStub: HomeQuestionsDto[] = [
  { items: homeQuestionsItemDtoStubs },
];
