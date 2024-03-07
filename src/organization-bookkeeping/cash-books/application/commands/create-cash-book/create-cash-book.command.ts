import { CreateCashBookDto } from '../../dto/create-cash-book.dto';

export class CreateCashBookCommand {
  constructor(public readonly params: CreateCashBookDto) {}
}
