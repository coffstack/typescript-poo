import { Person } from "./banking/Person";

function main() {
  const maria = new Person("Maria", "da Silva", new Date("1999-01-15"));

  console.log(maria.getFullName());

  maria.updateFirstName("Maria Clara");

  maria.getFullName();

  //Property isBirthdayPassed is protected and only accessible within class  and its subclasses.
  // maria.isBirthdayPassed();

  console.log(maria.getFullName());
}

main();
