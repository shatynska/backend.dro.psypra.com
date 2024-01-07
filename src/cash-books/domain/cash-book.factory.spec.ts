import { CashBook } from './cash-book.aggregate-root';
import { CashBookFactory } from './cash-book.factory';

describe('CashBookFactory', () => {
  jest.mock('~/shared/domain/value-objects');

  it('should be defined', () => {
    expect(CashBookFactory).toBeDefined();
  });

  it('should create cash book with defined title & cashBalance', () => {
    const received = CashBookFactory.create({ title: 'test' });

    expect(received.value).toBeInstanceOf(CashBook);
    expect(received.value).toEqual(
      expect.objectContaining({ title: expect.any(Object) }),
    );
  });
});

// TODO Test reconstitute method
