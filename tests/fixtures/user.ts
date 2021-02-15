import { User } from "../../lib/domain/user/user";
import { v4 as uuid } from "uuid";

export const userFactory = (): User => {
  const username = "testUsername";
  const firstName = "testName";
  const lastName = "lastName";
  const email = "test@test.com";
  const password = "testpassword";
  const id = uuid();

  return new User(username, firstName, lastName, email, password, id);
};
