import {
  FirstNameValidator,
  LastNameValidator,
} from "../../../lib/shared/validators/user/name";
import ValidationError from "../../../lib/shared/exceptions/validation";

describe("Names validators", () =>{
  it("Should create first name", () => {
    const name = "TestName"
    const firstName = new FirstNameValidator(name)

    expect(firstName.toString()).toEqual(name)

  });
  it("Should create last name", () => {
    const name = "TestLastName"
    const lastName = new LastNameValidator(name)

    expect(lastName.toString()).toEqual(name)

  });
  it("Should throw if firstName is too long", () => {
    const name = "TOOLONGNAMETOOLONGNAMETOOLONGNAMETOOLONGNAMETOOLONGNAME"
    const firstName = () => new FirstNameValidator(name)

    expect(firstName).toThrow(ValidationError)

  });
  it("Should throw if lastName is too long", () => {
    const name = "TOOLONGNAMETOOLONGNAMETOOLONGNAMETOOLONGNAMETOOLONGNAMETOOLONGNAME"
    const lastName = () => new FirstNameValidator(name)

    expect(lastName).toThrow(ValidationError)

  });
})