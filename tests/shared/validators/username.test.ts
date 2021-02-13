import ValidationError from "../../../lib/shared/exceptions/validation";
import { UsernameValidator } from "../../../lib/shared/validators/user/username";

describe("Username validator", () => {
  it("Should create username", () => {
    const test_username = "testusername";
    const username = new UsernameValidator(test_username);

    expect(username.getValidatedData()).toEqual(test_username);
  });
  it("Should throw if username is too long", () => {
    const test_username =
      "testusernametestusernametestusernametestusernametestusernametestusername";
    const username = () => new UsernameValidator(test_username);

    expect(username).toThrow(ValidationError);
  });
});
