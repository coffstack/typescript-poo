import { PaymentMethod } from "./PaymentMethod";

export class CreditCard implements PaymentMethod {
  constructor(
    public cardNumber: string,
    private creditLimit: number,
    private outstandingBalance: number = 0
  ) {}

  pay(amount: number): void {
    if (this.outstandingBalance + amount > this.creditLimit) {
      console.log("❌ Credit limit exceeded");
    } else {
      this.outstandingBalance += amount;
      console.log(`✅ Payment of $${amount} made by credit card.`);
    }
  }

  getBalance(): number {
    return this.creditLimit - this.outstandingBalance;
  }
}
