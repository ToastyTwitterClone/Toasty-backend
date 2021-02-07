import { User } from "../../lib/domain/user/user";
import ValidationError
  from "../../lib/shared/exceptions/validation";

describe("User domain model", () =>{
  it("Should create user", () => {
    let firstName = "TestName"
    let lastName = "TestLastName"

    const testUser = new User(firstName, lastName)

    expect(testUser.firstName).toEqual(firstName)
    expect(testUser.lastName).toEqual(lastName)

  });
  it("Should throw if firstName is too long", () => {
    let firstName = "VERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAME"
    let lastName = "TestLastName"

    const testUser = () => {
      new User(firstName, lastName)
    }

    expect(testUser).toThrow(ValidationError)

  });
  it("Should throw if lastName too long", () => {
    let firstName = "TestName"
    let lastName = "VERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAME"

    const testUser = () => {
      new User(firstName, lastName)
    }

    expect(testUser).toThrow(ValidationError)

  });
  it("Should throw if setting too long firstName", () => {
    const firstName = "TestName"
    const lastName = "TestLastName"
    const tooLongFirstName = "VERYLONGNAMEVERYLONGNAMEVERYLONGNAME"

    let testUser = new User(firstName, lastName)

    const changingFirstName = () => {
      testUser.firstName = tooLongFirstName
    }

    expect(changingFirstName).toThrow(ValidationError)

  });
  it("Should throw if setting too long lastName", () => {
    const firstName = "TestName"
    const lastName = "TestLastName"
    const tooLongLastName = "VERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAME"

    let testUser = new User(firstName, lastName)

    const changingLastName = () => {
      testUser.lastName = tooLongLastName
    }

    expect(changingLastName).toThrow(ValidationError)

  });
})