import { Person } from "./Person";
import { WithdrawalStrategy } from "./WithdrawalStrategy";

export class CompositionBankAccount {
  private holder: Person;
  private _balance: number;
  private accountNumber: string;
  private withdrawalStrategy: WithdrawalStrategy;

  constructor(
    person: Person,
    initialBalance: number,
    accountNumber: string,
    withdrawalStrategy: WithdrawalStrategy // Injeção de comportamento
  ) {
    this.holder = person;
    this._balance = initialBalance;
    this.accountNumber = accountNumber;
    this.withdrawalStrategy = withdrawalStrategy;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this._balance}\n`);
    } else {
      console.log("Deposit amount must be positive.\n");
    }
  }

  withdraw(amount: number): void {
    if (this.withdrawalStrategy.canWithdraw(this._balance, amount)) {
      this._balance = this.withdrawalStrategy.executeWithdrawal(
        this._balance,
        amount
      );
      console.log(`Withdrew $${amount}. New balance: $${this._balance}\n`);
    } else {
      throw new Error("Invalid withdrawal amount or insufficient funds.");
    }
  }

  get balance(): number {
    return this._balance;
  }

  get accountDetails(): string {
    return `Account Number: ${this.accountNumber}\nAccount Holder: ${this.holder.fullName}\nBalance: $${this._balance}\n`;
  }
}
