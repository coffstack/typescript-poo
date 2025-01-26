import { BankAccount } from "./banking/BankAccount";
import { Person } from "./banking/Person";
import { CurrentAccount, SavingsAccount } from "./banking/SavingsAccount";

const maria = new Person("Maria", "da Silva", new Date("1999-01-15"));

// const mariaAccount = new BankAccount(maria, 100, "123");
const mariaAccount = new SavingsAccount(maria, 100, "123", 2);

mariaAccount.deposit(200);

mariaAccount.withdraw(200);

console.log(mariaAccount.accountDetails);

function transaction(account: BankAccount) {
  // exemplo
}

transaction(mariaAccount);
