import ValidationError from "../../exceptions/validation";
import BaseValidator from "./base";

const MAX_PASSWORD_LENGTH = 64;
const MIN_PASSWORD_LENGTH = 8;
export default class PasswordValidator extends BaseValidator {
  constructor(password: string) {
    super();
    const password_len = password.length;
    if (password_len < MIN_PASSWORD_LENGTH) {
      throw new ValidationError("Password is too short");
    } else if (password_len > MAX_PASSWORD_LENGTH) {
      throw new ValidationError("Password is too long");
    }
    // TODO: Add complexity check
    // TODO: Check if password already encrypted
    this._validated = password;
  }
}
