import { BankAccount } from "./BankAccount";
import { Person } from "./Person";

// subclass
export class SavingsAccount extends BankAccount {
  private interestRate: number; // taxa de juros
  accountType = "SavingsAccount";
  constructor(person: Person, initialBalance: number, interestRate: number) {
    super(person, initialBalance);
    this.interestRate = interestRate;
  }

  addInterest(): void {
    const interest = this.balance * (this.interestRate / 100);
    this.deposit(interest);
    console.log(`Interest added: $${interest}. New Balance: $${this.balance}`);
  }
}
