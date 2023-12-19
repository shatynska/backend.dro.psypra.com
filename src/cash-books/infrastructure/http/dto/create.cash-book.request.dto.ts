import { PickType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CashBookDto } from './cash-book.dto';

export class CreateCashBookRequestDto extends PickType(CashBookDto, [
  'title',
] as const) {
  @IsNotEmpty()
  title: string;
}
