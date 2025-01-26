import { BankAccount } from "./BankAccount";
import { Person } from "./Person";

// subclass
export class SavingsAccount extends BankAccount {
  private interestRate: number; // taxa de juros
  constructor(
    person: Person,
    initialBalance: number,
    accountNumber: string,
    interestRate: number
  ) {
    super(person, initialBalance, accountNumber);
    this.interestRate = interestRate;
  }
}

export class CurrentAccount extends BankAccount {}
