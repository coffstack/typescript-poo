import { Person } from "./banking/Person";

function main() {
  const maria = new Person("Maria", "da Silva", new Date("1999-01-15"));

  //maria.firstName

  // maria.firstName = "Maria Clara"
  maria.firstName = "";

  // console.log(maria.getFirstName());
  console.log(maria.fullName);
}

main();
