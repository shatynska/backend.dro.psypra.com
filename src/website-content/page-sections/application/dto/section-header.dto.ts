export class SectionHeaderDto {
  headings!: SectionHeadingsDto;
}

export class SectionHeadingsDto {
  primary!: string;
  secondary!: string;
}

export const sectionHeadingsDtoStubs: SectionHeadingsDto[] = [
  {
    primary: 'Критерії пошуку',
    secondary: 'Багато питань?',
  },
  {
    primary: 'Спеціальності',
    secondary: 'Хто є хто?',
  },
  {
    primary: 'Психотерапевти',
    secondary: 'Що це таке?',
  },
  {
    primary: 'Фахівці',
    secondary: 'До кого звернутися?',
  },
  {
    primary: 'Созанська Ірина',
    secondary: 'Психотерапевт',
  },
  {
    primary: 'Короткий огляд',
    secondary: 'Досьє',
  },
  {
    primary: 'Професійний шлях',
    secondary: 'Який досвід?',
  },
  {
    primary: 'Основні запити',
    secondary: 'З якими темами?',
  },
];

export const sectionHeaderDtoStubs: SectionHeaderDto[] = [
  {
    headings: sectionHeadingsDtoStubs[0],
  },
  {
    headings: sectionHeadingsDtoStubs[4],
  },
  {
    headings: sectionHeadingsDtoStubs[5],
  },
];
