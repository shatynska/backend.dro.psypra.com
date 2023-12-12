import { ApiProperty } from '@nestjs/swagger';
import { CashBook } from './cashBook.entity';
import { Expense } from './expense.entity';
import { MembershipFee } from './membershipFee.entity';

export class ReportingMonth {
  @ApiProperty({
    example: 'c0297617-9f36-489e-ba72-d462777987e9',
  })
  id: string;
  @ApiProperty({
    example: "'2022-09-01'",
    type: 'string',
    format: 'date-time',
  })
  month: Date;
  @ApiProperty({
    type: () => CashBook,
    required: false,
  })
  cashBook?: CashBook;
  @ApiProperty({
    example: 'c0287617-9f36-489e-ba72-d462777987e9',
  })
  cashBookId: string;
  @ApiProperty({
    type: () => Expense,
    isArray: true,
    required: false,
  })
  expenses?: Expense[];
  @ApiProperty({
    type: () => MembershipFee,
    isArray: true,
    required: false,
  })
  membershipFees?: MembershipFee[];
}
