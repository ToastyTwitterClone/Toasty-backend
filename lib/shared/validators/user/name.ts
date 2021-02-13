import ValidationError from "../../exceptions/validation";
import BaseValidator from "./base";

const FIRST_NAME_MAX_LEN = 35;
const LAST_NAME_MAX_LEN = 50;

export class FirstNameValidator extends BaseValidator {
  constructor(firstName: string) {
    super();
    if (firstName.length > FIRST_NAME_MAX_LEN) {
      throw new ValidationError(
        `First name cannot be longer than ${FIRST_NAME_MAX_LEN}`,
      );
    }
    this._validated = firstName;
  }
}

export class LastNameValidator extends BaseValidator {
  constructor(lastName: string) {
    super();
    if (lastName.length > LAST_NAME_MAX_LEN) {
      throw new ValidationError(
        `First name cannot be longer than ${LAST_NAME_MAX_LEN}`,
      );
    }
    this._validated = lastName;
  }
}
