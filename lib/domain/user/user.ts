import {
  FirstNameValidator,
  LastNameValidator,
} from "../../shared/validators/user/name";
import PasswordValidator from "../../shared/validators/user/password";
import BaseValidator from "../../shared/validators/user/base";
import EmailValidator from "../../shared/validators/user/email";

export class User {
  private _firstName: string;
  private _lastName: string;
  private _password?: string;
  private _email: string;
  private _id?: string;

  // Unexpected any, specify a different type
  // eslint-disable-next-line
  private validate(argument: any, validator: any): BaseValidator {
    return new validator(argument);
  }

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password?: string,
    id?: string,
  ) {
    this._firstName = this.validate(
      firstName,
      FirstNameValidator,
    ).getValidatedData();
    this._lastName = this.validate(
      lastName,
      LastNameValidator,
    ).getValidatedData();
    this._email = this.validate(email, EmailValidator).getValidatedData();
    this._id = id; // TODO: Create new ID for this user
    if (password !== undefined) {
      this.password = password;
    }
  }

  // Getters and setters

  get id(): string | undefined {
    return this._id;
  }

  set email(email: string) {
    this._email = this.validate(email, EmailValidator).getValidatedData();
  }

  get email(): string {
    return this._email;
  }

  get password(): string | undefined {
    return this._password;
  }

  set password(password: string | undefined) {
    this._password = this.validate(
      password,
      PasswordValidator,
    ).getValidatedData();
    // TODO: Hash password here
  }

  set firstName(firstName: string) {
    this.validate(firstName, FirstNameValidator);
    this._firstName = firstName;
  }

  get firstName(): string {
    return this._firstName;
  }

  set lastName(lastName: string) {
    this.validate(lastName, LastNameValidator);
    this._lastName = lastName;
  }

  get lastName(): string {
    return this._lastName;
  }
}
