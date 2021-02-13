import { User } from "../../lib/domain/user/user";
import ValidationError from "../../lib/shared/exceptions/validation";
import exp = require("constants");

describe("User domain model", () => {
  it("Should initiate user", () => {
    const username = "testusername";
    const firstName = "TestName";
    const lastName = "TestLastName";
    const email = "test@test.com";

    const testUser = new User(username, firstName, lastName, email);

    expect(testUser.username).toEqual(username);
    expect(testUser.firstName).toEqual(firstName);
    expect(testUser.lastName).toEqual(lastName);
    expect(testUser.email).toEqual(email);
  });
  it("Should initiate user with id", () => {
    const username = "testusername";
    const firstName = "TestName";
    const lastName = "TestLastName";
    const email = "test@test.com";
    const id = "RandomID";

    const testUser = new User(
      username,
      firstName,
      lastName,
      email,
      undefined,
      id,
    );

    expect(testUser.username).toEqual(username);
    expect(testUser.firstName).toEqual(firstName);
    expect(testUser.lastName).toEqual(lastName);
    expect(testUser.email).toEqual(email);
    expect(testUser.id).toEqual(id);
  });
  it("Should initiate user with password", () => {
    const username = "testusername";
    const firstName = "TestName";
    const lastName = "TestLastName";
    const email = "test@test.com";
    const password = "supersecret";

    const testUser = new User(username, firstName, lastName, email, password);

    expect(testUser.username).toEqual(username);
    expect(testUser.firstName).toEqual(firstName);
    expect(testUser.lastName).toEqual(lastName);
    expect(testUser.email).toEqual(email);
    expect(testUser.password).toEqual(password);
  });
  it("Should initiate user with all fields", () => {
    const username = "testusername";
    const firstName = "TestName";
    const lastName = "TestLastName";
    const email = "test@test.com";
    const password = "supersecret";
    const id = "TestId";

    const testUser = new User(
      username,
      firstName,
      lastName,
      email,
      password,
      id,
    );

    expect(testUser.username).toEqual(username);
    expect(testUser.firstName).toEqual(firstName);
    expect(testUser.lastName).toEqual(lastName);
    expect(testUser.email).toEqual(email);
    expect(testUser.password).toEqual(password);
    expect(testUser.id).toEqual(id);
  });
  it("Should throw if firstName is too long", () => {
    const username = "testusername";
    const firstName = "VERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAME";
    const lastName = "TestLastName";
    const email = "test@test.com";

    const testUser = () => {
      new User(username, firstName, lastName, email);
    };

    expect(testUser).toThrow(ValidationError);
  });
  it("Should throw if lastName too long", () => {
    const username = "testusername";
    const firstName = "TestName";
    const lastName =
      "VERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAME";
    const email = "test@test.com";

    const testUser = () => {
      new User(username, firstName, lastName, email);
    };

    expect(testUser).toThrow(ValidationError);
  });
  it("Should throw if email is not valid", () => {
    const username = "testusername";
    const firstName = "TestName";
    const lastName = "TestLastName";
    const email = "testtest.com";

    const testUser = () => {
      new User(username, firstName, lastName, email);
    };

    expect(testUser).toThrow(ValidationError);
  });
  it("Should throw if password is not valid", () => {
    const username = "testusername";
    const firstName = "TestName";
    const lastName = "TestLastName";
    const email = "test@test.com";
    const password = "test";

    const testUser = () => {
      new User(username, firstName, lastName, email, password);
    };

    expect(testUser).toThrow(ValidationError);
  });
  it("Should throw if username is too long", () => {
    const username =
      "testusernametestusernametestusernametestusernametestusernametestusernametestusername";
    const firstName = "TestName";
    const lastName = "TestLastName";
    const email = "test@test.com";
    const password = "test";

    const testUser = () => {
      new User(username, firstName, lastName, email, password);
    };

    expect(testUser).toThrow(ValidationError);
  });
  it("Should throw if setting too long firstName", () => {
    const username = "testusername";
    const firstName = "TestName";
    const lastName = "TestLastName";
    const tooLongFirstName = "VERYLONGNAMEVERYLONGNAMEVERYLONGNAME";
    const email = "test@test.com";

    let testUser = new User(username, firstName, lastName, email);

    const changingFirstName = () => {
      testUser.firstName = tooLongFirstName;
    };

    expect(changingFirstName).toThrow(ValidationError);
  });
  it("Should throw if setting too long lastName", () => {
    const username = "testusername";
    const firstName = "TestName";
    const lastName = "TestLastName";
    const tooLongLastName =
      "VERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAMEVERYLONGNAME";
    const email = "test@test.com";

    let testUser = new User(username, firstName, lastName, email);

    const changingLastName = () => {
      testUser.lastName = tooLongLastName;
    };

    expect(changingLastName).toThrow(ValidationError);
  });
  it("Should throw if setting wrong email", () => {
    const username = "testusername";
    const firstName = "TestName";
    const lastName = "TestLastName";
    const email = "test@test.com";
    const test_email = "testtest.com";

    let testUser = new User(username, firstName, lastName, email);

    const changingEmail = () => {
      testUser.email = test_email;
    };

    expect(changingEmail).toThrow(ValidationError);
  });
  it("Should throw if setting wrong password", () => {
    const username = "testusername";
    const firstName = "TestName";
    const lastName = "TestLastName";
    const email = "test@test.com";
    const test_password = "test";

    let testUser = new User(username, firstName, lastName, email);

    const changingPassword = () => {
      testUser.password = test_password;
    };

    expect(changingPassword).toThrow(ValidationError);
  });
  it("Should throw if setting too long username", () => {
    const username = "testusername";
    const firstName = "TestName";
    const lastName = "TestLastName";
    const email = "test@test.com";
    const test_username =
      "testusernametestusernametestusernametestusernametestusernametestusername";

    let testUser = new User(username, firstName, lastName, email);

    const changingUsername = () => {
      testUser.username = test_username;
    };

    expect(changingUsername).toThrow(ValidationError);
  });
});
