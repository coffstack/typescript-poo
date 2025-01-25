export type Person = {
  firstName: string; // atributos
  lastName: string;
  birthDate: Date;
};

// "métodos - method"
// funções
export function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}

export function getAge(person: Person): number {
  const today = new Date();
  const age = today.getFullYear() - person.birthDate.getFullYear();
  const isBirthdayPassed =
    today.getMonth() > person.birthDate.getMonth() ||
    (today.getMonth() === person.birthDate.getMonth() &&
      today.getDate() >= person.birthDate.getDate());
  return isBirthdayPassed ? age : age - 1;
}

export function updateFirstName(person: Person, firstName: string): Person {
  return {
    ...person,
    firstName,
  };
}
