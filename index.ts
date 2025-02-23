import { BankAccount } from "./banking/BankAccount";
import { CurrentAccount } from "./banking/CurrentAccount";
import { Person } from "./banking/Person";
import { SavingsAccount } from "./banking/SavingsAccount";

const maria = new Person("Maria", "da Silva", new Date("1999-01-15"));
const mariaSavingsAccount = new SavingsAccount(maria, 100, 2);

const lucas = new Person("Lucas", "Garcez", new Date("1996-02-16"));
const lucasCurrentAccount = new CurrentAccount(lucas, 100, 100);

// console.log(mariaSavingsAccount.accountDetails);
// console.log(lucasCurrentAccount.accountDetails);

// form
const accountNumber = "1234567";

console.log(BankAccount.validateAccountNumber(accountNumber));
