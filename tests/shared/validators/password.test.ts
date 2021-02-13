import ValidationError from "../../../lib/shared/exceptions/validation";
import PasswordValidator from "../../../lib/shared/validators/user/password";

describe("Password validator", () => {
  it("Should create password", () => {
    const test_password = "veryStrongPassword123";
    const password = new PasswordValidator(test_password);

    expect(password.getValidatedData()).toEqual(test_password);
  });
  it("Should throw if password is too short", () => {
    const test_password = "p";
    const password = () => new PasswordValidator(test_password);

    expect(password).toThrow(ValidationError);
  });
  it("Should throw if password is too long", () => {
    const test_password =
      "PasswordPasswordPasswordPasswordPasswordPasswordPasswordPasswordPassword";
    const password = () => new PasswordValidator(test_password);

    expect(password).toThrow(ValidationError);
  });
});
