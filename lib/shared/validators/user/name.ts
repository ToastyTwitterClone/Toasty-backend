import ValidationError from "../../exceptions/validation";

const FIRST_NAME_MAX_LEN = 35;
const LAST_NAME_MAX_LEN = 50;

export class FirstNameValidator {
  private firstName: string;

  constructor(firstName: string) {
    if (firstName.length > FIRST_NAME_MAX_LEN) {
      throw new ValidationError(
        `First name cannot be longer than ${FIRST_NAME_MAX_LEN}`,
      );
    }
    this.firstName = firstName;
  }

  public toString(): string {
    return this.firstName;
  }
}

export class LastNameValidator {
  private lastName: string;
  constructor(lastName: string) {
    if (lastName.length > LAST_NAME_MAX_LEN) {
      throw new ValidationError(
        `First name cannot be longer than ${LAST_NAME_MAX_LEN}`,
      );
    }
    this.lastName = lastName;
  }

  public toString(): string {
    return this.lastName;
  }
}
