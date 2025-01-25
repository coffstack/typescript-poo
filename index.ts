import { Person } from "./banking/Person";

function main() {
  const maria = new Person("Maria", "da Silva", new Date("1999-01-15"));

  console.log(maria);
}

main();
