import {
  getAge,
  getFullName,
  Person,
  updateFirstName,
} from "./banking/Person-functional";

function main() {
  const maria: Person = {
    firstName: "Maria",
    lastName: "da Silva",
    birthDate: new Date("1999-01-15"), //YYYY-MM-DD
  };

  console.log(getFullName(maria));

  console.log(getAge(maria));

  const updatedMaria = updateFirstName(maria, "Maria Clara");

  console.log(updatedMaria);
}

main();
