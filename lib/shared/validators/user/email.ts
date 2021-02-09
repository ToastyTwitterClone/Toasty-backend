import ValidationError from "../../exceptions/validation";
import BaseValidator from "./base";

const EMAIL_SIGN = "@";

export default class EmailValidator extends BaseValidator {
  constructor(email: string) {
    super();
    if (!email.includes(EMAIL_SIGN)) {
      throw new ValidationError("Email is not valid");
    }
    this._validated = email;
  }
}
