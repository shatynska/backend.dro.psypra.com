import { CqrsModule, QueryBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import { success } from '~/shared/core/result';
import { cashBalanceResponseDtoStub } from '../../dto/responses/cash-balance.response.dto.stub';
import { GetCashBalanceController } from './get-cash-balance.controller';
describe('GetCashBalanceController', () => {
  let controller: GetCashBalanceController;

  const mockQueryBus = {
    execute: jest
      .fn()
      .mockResolvedValueOnce(success(cashBalanceResponseDtoStub)),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      controllers: [GetCashBalanceController],
      providers: [
        {
          provide: QueryBus,
          useValue: mockQueryBus,
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
