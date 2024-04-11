import { Type } from 'class-transformer';
import { CashBookResponseDto } from './cash-book.response.dto';

export class CashBooksResponseDto {
  @Type(() => CashBookResponseDto)
  cashBooks!: CashBookResponseDto[];

  constructor() {}
}
