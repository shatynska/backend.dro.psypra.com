import { InvalidCashBookYearError } from '../errors';

export class CashBookYear {
  constructor(private value: number) {
    this.ensureIsValidCashBookYear(value);
    this.value = value;
  }

  private ensureIsValidCashBookYear(value: number) {
    const currentYear = new Date().getFullYear();
    if (!Number.isInteger(value) || value < currentYear) {
      throw new InvalidCashBookYearError();
    }
  }
}
