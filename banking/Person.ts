export class Person {
  private _firstName: string;
  public lastName: string;
  birthDate: Date;

  constructor(firstName: string, lastName: string, birthDate: Date) {
    this._firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }

  get firstName() {
    // return this.firstName.toUpperCase();
    return this._firstName;
  }

  set firstName(name: string) {
    if (name.length > 0) {
      this._firstName = name;
    }
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge(): number {
    const today = new Date();
    const age = today.getFullYear() - this.birthDate.getFullYear();

    return this.isBirthdayPassed() ? age : age - 1;
  }

  protected isBirthdayPassed(): boolean {
    const today = new Date();

    return (
      today.getMonth() > this.birthDate.getMonth() ||
      (today.getMonth() === this.birthDate.getMonth() &&
        today.getDate() >= this.birthDate.getDate())
    );
  }
}
