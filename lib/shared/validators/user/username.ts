import ValidationError from "../../exceptions/validation";
import BaseValidator from "./base";

const USERNAME_MAX_LEN = 64;

export class UsernameValidator extends BaseValidator {
  constructor(username: string) {
    super();
    if (username.length > USERNAME_MAX_LEN) {
      throw new ValidationError(
        `Username cannot be longer than ${USERNAME_MAX_LEN}`,
      );
    }
    this._validated = username;
  }
}
