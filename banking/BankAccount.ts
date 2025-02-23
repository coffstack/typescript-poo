import { Person } from "./Person";

// super class
export abstract class BankAccount {
  private holder: Person; // composition (composição)
  protected _balance: number; // saldo - $100
  private accountNumber: string; // número da conta

  private static nextAccountNumber: number = 1;

  constructor(person: Person, initialBalance: number) {
    this.holder = person;
    this._balance = initialBalance;
    this.accountNumber = BankAccount.generateAccountNumber();
  }

  private static generateAccountNumber(): string {
    return (this.nextAccountNumber++).toString().padStart(6, "0");
  }

  /**
   * Statistical method to validate an account number.
   * We consider it valid if it is composed of exactly 6 digits.
   * @param accountNumber
   * @returns if `accountNumber` is valid
   */
  public static validateAccountNumber(accountNumber: string): boolean {
    return /^\d{6}$/.test(accountNumber);
  }

  // depositar
  deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this._balance}\n`);
    } else {
      console.log("Deposit amount must be positive.\n");
    }
  }

  abstract get accountType(): string;

  // sacar
  withdraw(amount: number): void {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      this.logSuccessWithDraw(amount);
    } else {
      this.logInvalidWithDraw();
    }
  }

  protected logSuccessWithDraw(amount: number) {
    console.log(
      `${this.accountType}: Withdrew $${amount}. New balance: $${this._balance}\n`
    );
  }

  protected logInvalidWithDraw() {
    console.log(
      `${this.accountType}: Invalid withdrawal amount or insufficient funds.\n`
    );
  }

  get balance(): number {
    return this._balance;
  }

  get accountDetails(): string {
    return `Account Number: ${this.accountNumber}\nAccount Holder: ${this.holder.fullName}\nBalance: $${this._balance}\n`;
  }
}
