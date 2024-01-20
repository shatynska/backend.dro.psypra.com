import { IsNotEmpty, IsString } from 'class-validator';
import { CreateCashBookDto } from '~/cash-books/application/dto/create-cash-book.dto';

export class CreateCashBookRequestDto implements CreateCashBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;
}
