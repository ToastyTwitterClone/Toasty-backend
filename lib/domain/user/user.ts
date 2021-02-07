import {
  FirstNameValidator,
  LastNameValidator,
} from "../../shared/validators/user/name";

export class User {
  private _firstName: string;
  private _lastName: string;

  // Unexpected any, specify a different type
  // eslint-disable-next-line
  private validate(argument: any, validator: any) {
    new validator(argument);
  }

  constructor(firstName: string, lastName: string) {
    this.validate(firstName, FirstNameValidator);
    this.validate(lastName, LastNameValidator);
    this._firstName = firstName;
    this._lastName = lastName;
  }

  set firstName(value: string) {
    this.validate(value, FirstNameValidator);
    this._firstName = value.toString();
  }

  get firstName(): string {
    return this._firstName;
  }

  set lastName(value: string) {
    this.validate(value, LastNameValidator);
    this._lastName = value.toString();
  }

  get lastName(): string {
    return this._lastName;
  }
}
