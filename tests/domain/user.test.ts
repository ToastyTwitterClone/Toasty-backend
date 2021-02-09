import { User } from "../../lib/domain/user/user";
import ValidationError from "../../lib/shared/exceptions/validation";
import exp = require("constants");

describe("User domain model", () => {
  it("Should initiate user", () => {
    const firstName = "TestName";
    const lastName = "TestLastName";
    const email = "test@test.com";

    const testUser = new User(firstName, lastName, email);

    expect(testUser.firstName).toEqual(firstName);
    expect(testUser.lastName).toEqual(lastName);
    expect(testUser.email).toEqual(email);
  });
  it("Should initiate user with id", () => {
    const firstName = "TestName";
    const lastName = "TestLastName";
    const email = "test@test.com";
    const id = "RandomID";

    const testUser = new User(firstName, lastName, email, undefined, id);

    expect(testUser.firstName).toEqual(firstName);
    expect(testUser.lastName).toEqual(lastName);
    expect(testUser.email).toEqual(email);
    expect(testUser.id).toEqual(id);
  });
  it("Should initiate user with password", () => {
    const firstName = "TestName";
    const lastName = "TestLastName";
    const email = "test@test.com";
    const password = "supersecret";

    const testUser = new User(firstName, lastName, email, password);

    expect(testUser.firstName).toEqual(firstName);
    expect(testUser.lastName).toEqual(lastName);
    expect(testUser.email).toEqual(email);
    expect(testUser.password).toEqual(password);
  });
  it("Should initiate user with all fields", () => {
    const firstName = "TestName";
    const lastName = "TestLastName";
    const email = "test@test.com";
    const password = "supersecret";
    const id = "TestId";

    const testUser = new User(firstName, lastName, email, password, id);

    expect(testUser.firstName).toEqual(firstName);
    expect(testUser.lastName).toEqual(lastName);
    expect(testUser.email).toEqual(email);
    expect(testUser.password).toEqual(password);
    expect(testUser.id).toEqual(id);
  });
  it("Should throw if firstName is too long", () => {
    const firstName = "VERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAME";
    const lastName = "TestLastName";
    const email = "test@test.com";

    const testUser = () => {
      new User(firstName, lastName, email);
    };

    expect(testUser).toThrow(ValidationError);
  });
  it("Should throw if lastName too long", () => {
    const firstName = "TestName";
    const lastName =
      "VERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAME";
    const email = "test@test.com";

    const testUser = () => {
      new User(firstName, lastName, email);
    };

    expect(testUser).toThrow(ValidationError);
  });
  it("Should throw if email is not valid", () => {
    const firstName = "TestName";
    const lastName = "TestLastName";
    const email = "testtest.com";

    const testUser = () => {
      new User(firstName, lastName, email);
    };

    expect(testUser).toThrow(ValidationError);
  });
  it("Should throw if setting too long firstName", () => {
    const firstName = "TestName";
    const lastName = "TestLastName";
    const tooLongFirstName = "VERYLONGNAMEVERYLONGNAMEVERYLONGNAME";
    const email = "test@test.com";

    let testUser = new User(firstName, lastName, email);

    const changingFirstName = () => {
      testUser.firstName = tooLongFirstName;
    };

    expect(changingFirstName).toThrow(ValidationError);
  });
  it("Should throw if setting too long lastName", () => {
    const firstName = "TestName";
    const lastName = "TestLastName";
    const tooLongLastName =
      "VERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAME";
    const email = "test@test.com";

    let testUser = new User(firstName, lastName, email);

    const changingLastName = () => {
      testUser.lastName = tooLongLastName;
    };

    expect(changingLastName).toThrow(ValidationError);
  });
});