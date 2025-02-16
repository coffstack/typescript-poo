import { CreditCard } from "./banking/CreditCard";
import { CurrentAccount } from "./banking/CurrentAccount";

import { Person } from "./banking/Person";
import { ProcessPayment } from "./banking/ProcessPayment";

const maria = new Person("Maria", "da Silva", new Date("1999-01-15"));
const mariaCurrentAccount = new CurrentAccount(maria, 100, "123", 2);

const lucas = new Person("Lucas", "Garcez", new Date("1996-02-16"));
const lucasCreditCard = new CreditCard("555 555", 200);

const payment = new ProcessPayment(lucasCreditCard, 100);
payment.execute();
