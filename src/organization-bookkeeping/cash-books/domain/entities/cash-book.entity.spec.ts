import { CashBook } from './cash-book.entity';

describe('CashBook', () => {
  jest.mock('~/shared/domain/value-objects');

  it('should be defined', () => {
    expect(CashBook).toBeDefined();
  });

  it('should create cash book with defined title', () => {
    const received = CashBook.create({ title: 'test', isTitleUnique: true });
    const newCashBook = received.value as CashBook;

    expect(received.value).toBeInstanceOf(CashBook);

    expect(newCashBook).toMatchObject({ title: { value: 'test' } });
  });
});

// TODO Test reconstitute method & others
