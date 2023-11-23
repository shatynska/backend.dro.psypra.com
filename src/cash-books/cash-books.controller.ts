import { Public } from '@common/decorators';
import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CashBalanceResponseDto } from './dto';
import { cashBalanceStub } from './stubs';

@Controller('cash-books')
@Public()
@ApiTags('cash-books')
export class CashBooksController {
  constructor() {}

  @Get('cash-balance')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiResponse({
    status: 200,
    type: CashBalanceResponseDto,
  })
  getCashBalance() {
    return new CashBalanceResponseDto(cashBalanceStub);
  }

  @Get('current')
  getCurrentCashBooks() {
    return {
      reportingMonths: [11, 10, 9, 7, 6, 5],
      membersWithMembershipFees: [
        {
          name: 'Берчук Володимир',
          membershipFees: [
            [10, 200],
            [9, 200],
            [7, 200],
            [6, 200],
          ],
        },
        {
          name: 'Білас Юлія',
          membershipFees: [
            [10, 200],
            [9, 200],
            [7, 200],
          ],
        },
        {
          name: 'Гамбарова Еляна',
          membershipFees: [
            [10, 200],
            [9, 200],
            [7, 200],
          ],
        },
        {
          name: 'Дробчак Ольга',
          membershipFees: [
            [10, 200],
            [9, 200],
            [7, 200],
            [6, 200],
            [5, 200],
          ],
        },
        {
          name: 'Коцюба Галина',
          membershipFees: [
            [6, 200],
            [5, 500],
          ],
        },
        {
          name: 'Лех Наталія',
          membershipFees: [
            [10, 200],
            [9, 200],
            [7, 200],
            [6, 200],
            [5, 200],
          ],
        },
        {
          name: 'Некрасова Валентина',
          membershipFees: [
            [10, 200],
            [9, 200],
            [7, 200],
            [6, 200],
            [5, 200],
          ],
        },
        {
          name: 'Петришин Ольга',
          membershipFees: [
            [10, 200],
            [9, 200],
            [7, 200],
            [6, 200],
            [5, 200],
          ],
        },
        {
          name: 'Созанська Ірина',
          membershipFees: [
            [10, 200],
            [9, 200],
            [7, 200],
            [6, 200],
            [5, 200],
          ],
        },
        {
          name: 'Татаревич Галина',
          membershipFees: [[10, 200]],
        },
        {
          name: 'Франчук Тетяна',
          membershipFees: [[7, 200]],
        },
        {
          name: 'Чапля Уляна',
          membershipFees: [
            [10, 200],
            [9, 200],
            [7, 200],
            [6, 200],
            [5, 200],
          ],
        },
        {
          name: 'Шатинська Альона',
          membershipFees: [
            [10, 200],
            [9, 200],
            [7, 200],
            [6, 200],
            [5, 200],
          ],
        },
      ],
      expenses: [
        { id: '1', date: '2029', amount: 45000, details: 'Піца' },
        { id: '2', date: '2029', amount: 19000, details: 'Алкоголь' },
        { id: '3', date: '2025', amount: 45000, details: 'Піца' },
      ],
    };
  }
}
