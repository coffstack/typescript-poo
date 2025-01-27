import { BankAccount } from "./BankAccount";
import { Person } from "./Person";

export class CurrentAccount extends BankAccount {
  private overdraftLimit: number;

  constructor(
    person: Person,
    initialBalance: number,
    accountNumber: string,
    overdraftLimit: number
  ) {
    super(person, initialBalance, accountNumber);
    this.overdraftLimit = overdraftLimit;
  }

  withdraw(amount: number): void {
    const totalLimit = this._balance + this.overdraftLimit;
    if (amount > 0 && amount <= totalLimit) {
      this._balance -= amount;
      this.logSuccessWithDraw(amount);
    } else {
      this.logInvalidWithDraw();
    }
  }
}
