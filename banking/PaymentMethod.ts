export interface PaymentMethod {
  pay(amount: number): void;
  getBalance(): number;
}
