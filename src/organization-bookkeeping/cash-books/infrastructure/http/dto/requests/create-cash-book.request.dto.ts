import { IsNotEmpty, IsString } from 'class-validator';
import { CreateCashBookDto } from '../../../../application/dto/create-cash-book.dto';

export class CreateCashBookRequestDto implements CreateCashBookDto {
  @IsNotEmpty()
  @IsString()
  title!: string;
}
