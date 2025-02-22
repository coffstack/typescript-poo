import { BankAccount } from "./banking/BankAccount";
import { CurrentAccount } from "./banking/CurrentAccount";
import { Person } from "./banking/Person";
import { SavingsAccount } from "./banking/SavingsAccount";

const maria = new Person("Maria", "da Silva", new Date("1999-01-15"));
const mariaSavingsAccount = new SavingsAccount(maria, 100, "123", 2);

// mariaSavingsAccount.addInterest();

const lucas = new Person("Lucas", "Garcez", new Date("1996-02-16"));
const lucasCurrentAccount = new CurrentAccount(lucas, 100, "1111", 100);

mariaSavingsAccount.withdraw(150);

/**
 *
 * @param sender envia
 * @param receiver recebe
 * @param amount quantidade
 */
function transaction(
  sender: BankAccount,
  receiver: BankAccount,
  amount: number
) {
  if (amount > 0 && amount <= sender.balance) {
    sender.withdraw(amount);
    receiver.deposit(amount);
    console.log("Transaction successful");
  } else {
    console.log("Transaction failed: insufficient funds or invalid amount.");
  }
}

// enviar 50 do Lucas para a Maria
transaction(lucasCurrentAccount, mariaSavingsAccount, 50);
