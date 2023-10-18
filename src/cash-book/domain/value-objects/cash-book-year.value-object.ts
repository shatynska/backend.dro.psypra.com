import { InvalidCashBookYearForCreationError } from '../errors';

export class CashBookYear {
  constructor(readonly value: number = new Date().getFullYear()) {
    this.ensureIsValidCashBookYearForCreation(value);
    this.value = value;
  }

  private ensureIsValidCashBookYearForCreation(value: number): void {
    const currentYear = new Date().getFullYear();
    const validCashBookYearArray = [
      currentYear - 1,
      currentYear,
      currentYear + 1,
    ];
    if (!validCashBookYearArray.includes(value)) {
      throw new InvalidCashBookYearForCreationError();
    }
  }
}
