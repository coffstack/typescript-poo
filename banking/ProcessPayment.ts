import { PaymentMethod } from "./PaymentMethod";

export class ProcessPayment {
  constructor(private paymentMethod: PaymentMethod, private amount: number) {}

  execute(): void {
    this.paymentMethod.pay(this.amount);
    console.log("💰 Balance after payment:", this.paymentMethod.getBalance());
  }
}
