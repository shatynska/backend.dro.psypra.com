import { OmitType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { CashBookDto } from './cash-book.dto';

export class CashBookResponseDto extends OmitType(CashBookDto, [
  'reportingMonths' as const,
]) {
  constructor(cashBook: CashBookResponseDto) {
    super();
    Object.assign(this, cashBook);
  }
}

export class CashBooksResponseDto {
  @Type(() => CashBookResponseDto)
  cashBooks: CashBookResponseDto[];

  constructor() {}
}
