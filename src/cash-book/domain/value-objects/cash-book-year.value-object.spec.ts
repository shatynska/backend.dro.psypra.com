import { InvalidCashBookYearForCreationError } from '../errors';
import { CashBookYear } from './cash-book-year.value-object';

describe('CashBookYear', () => {
  const currentYear = new Date().getFullYear();

  it('should be defined and be instance of CashBookYearZ', () => {
    const cashBookYear = new CashBookYear();

    expect(cashBookYear).toBeDefined();
    expect(cashBookYear).toBeInstanceOf(CashBookYear);
  });

  it('should create with default value', () => {
    const cashBookYear = new CashBookYear();
    expect(cashBookYear.value).toBe(currentYear);
  });

  it('should accept last year', () => {
    const cashBookYear = new CashBookYear(currentYear - 1);
    expect(cashBookYear.value).toBe(currentYear - 1);
  });

  it('should accept next year', () => {
    const cashBookYear = new CashBookYear(currentYear + 1);
    expect(cashBookYear.value).toBe(currentYear + 1);
  });

  it('should throw an error when accept year before last year', () => {
    expect(() => {
      new CashBookYear(currentYear - 2);
    }).toThrow(InvalidCashBookYearForCreationError);
  });

  it('should throw an error when accept year after next year', () => {
    expect(() => {
      new CashBookYear(currentYear + 2);
    }).toThrow(InvalidCashBookYearForCreationError);
  });
});
