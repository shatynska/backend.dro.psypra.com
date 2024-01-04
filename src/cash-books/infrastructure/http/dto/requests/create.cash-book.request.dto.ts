import { IsNotEmpty } from 'class-validator';

export class CreateCashBookRequestDto {
  @IsNotEmpty()
  title: string;

  cashBalance?: number;
}
