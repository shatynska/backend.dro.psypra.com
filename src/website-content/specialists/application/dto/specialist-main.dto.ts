import {
  SpecialistEssentialDto,
  specialistEssentialDtoStubs,
} from './specialist-essential.dto';

export class SpecialistMainDto extends SpecialistEssentialDto {
  phones!: string[];
  emails!: string[];
  websites!: string[];
}

export const specialistMainDtoStubs: SpecialistMainDto[] = [
  {
    ...specialistEssentialDtoStubs[0],
    phones: ['+380762819234'],
    emails: ['berchuk@gmail.com'],
    websites: ['https://berchuk.com.ua'],
  },
  {
    ...specialistEssentialDtoStubs[1],
    phones: ['+380673290432', '+380971264324'],
    emails: ['lech@gmail.com'],
    websites: [],
  },
];
