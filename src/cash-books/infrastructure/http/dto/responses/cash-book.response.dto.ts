import { OmitType } from '@nestjs/swagger';
import { CashBookDto } from '~/cash-books/application/dto';

export class CashBookResponseDto extends OmitType(CashBookDto, [
  'reportingMonths' as const,
]) {
  constructor(cashBook: CashBookResponseDto) {
    super();
    Object.assign(this, cashBook);
  }
}
