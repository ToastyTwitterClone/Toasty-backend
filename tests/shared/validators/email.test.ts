import ValidationError from "../../../lib/shared/exceptions/validation";
import EmailValidator from "../../../lib/shared/validators/user/email";

describe("Email validator", () => {
  it("Should create email", () => {
    const test_email = "email@email.com";
    const email = new EmailValidator(test_email);

    expect(email.getValidatedData()).toEqual(test_email);
  });
  it("Should throw if email doesn't have @", () => {
    const test_email = "email.com";
    const email = () => new EmailValidator(test_email);

    expect(email).toThrow(ValidationError);
  });
});
