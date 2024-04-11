import { ApiProperty } from '@nestjs/swagger';

export class CashBookResponseDto {
  @ApiProperty({
    example: 'c0287617-9f36-489e-ba72-d462777987e9',
  })
  id!: string;

  @ApiProperty({
    example: 2022,
  })
  title!: string;

  @ApiProperty({
    example: 842000,
  })
  cashBalance!: number;

  constructor(cashBook: CashBookResponseDto) {
    Object.assign(this, cashBook);
  }
}
