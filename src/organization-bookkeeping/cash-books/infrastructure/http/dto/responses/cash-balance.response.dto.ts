import { ApiProperty } from '@nestjs/swagger';
import { CashBalanceDto } from '../../../../application/dto/cash-balance.dto';

export class CashBalanceResponseDto implements CashBalanceDto {
  @ApiProperty({
    example: 8420,
  })
  value!: number;

  constructor(cashBalance: CashBalanceResponseDto) {
    Object.assign(this, cashBalance);
  }
}

export const cashBalanceResponseDtoStub: CashBalanceResponseDto = {
  value: 8420,
};
