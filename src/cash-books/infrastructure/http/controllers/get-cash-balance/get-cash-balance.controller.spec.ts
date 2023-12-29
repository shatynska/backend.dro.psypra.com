import { Test, TestingModule } from '@nestjs/testing';
import { CashBooksService } from '~/cash-books/application/cash-books.service';
import { right } from '~/shared/domain/libs/either';
import { cashBalanceResponseDtoStub } from '../../dto/responses/cash-balance.response.dto.stub';
import { GetCashBalanceController } from './get-cash-balance.controller';

describe('GetCashBalanceController', () => {
  let controller: GetCashBalanceController;

  const mockService = {
    findCashBalance: jest
      .fn()
      .mockResolvedValueOnce(right(cashBalanceResponseDtoStub)),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetCashBalanceController],
      providers: [
        {
          provide: CashBooksService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<GetCashBalanceController>(GetCashBalanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get cash-balance', async () => {
    const result = await controller.getCashBalance();

    expect(result).toEqual(cashBalanceResponseDtoStub);
  });
});
