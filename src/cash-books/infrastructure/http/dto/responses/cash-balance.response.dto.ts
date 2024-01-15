import { ApiProperty } from '@nestjs/swagger';
import { CashBalanceDto } from '~/cash-books/application/dto/cash-balance.dto';

export class CashBalanceResponseDto extends CashBalanceDto {
  @ApiProperty({
    example: 8420,
  })
  value: number;

  constructor(cashBalance: CashBalanceResponseDto) {
    super();
    Object.assign(this, cashBalance);
  }
}

export const cashBalanceResponseDtoStub: CashBalanceResponseDto = {
  value: 8420,
};
