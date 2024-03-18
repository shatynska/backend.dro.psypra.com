import { ApiProperty } from '@nestjs/swagger';

export class HeaderHeadingsResponseDto {
  @ApiProperty({ example: 'Критерії пошуку' })
  primary: string;

  @ApiProperty({ example: 'Багато питань?' })
  secondary: string;
}

export const headerHeadingsResponseDtoStubs: HeaderHeadingsResponseDto[] = [
  {
    primary: 'Критерії пошуку',
    secondary: 'Багато питань?',
  },
  {
    primary: 'Спеціальності',
    secondary: 'Хто є хто?',
  },
  {
    primary: 'Спеціалісти',
    secondary: 'До кого звернутися?',
  },
];
