import UserRepositoryInMemory from "../../../lib/infrastructure/repositories/user/userRepositoryInMemory";
import { userFactory } from "../../fixtures/user";
import { User } from "../../../lib/domain/user/user";

let userRepository: UserRepositoryInMemory;

describe("User repository in memory", () => {
  beforeEach(() => {
    userRepository = new UserRepositoryInMemory();
  });
  it("Should save user to database", async () => {
    const user: User = userFactory();
    const createdUser = await userRepository.create(user);
    expect(createdUser.username).toEqual(user.username);
    expect(createdUser.email).toEqual(user.email);
    expect(createdUser.firstName).toEqual(user.firstName);
    expect(createdUser.lastName).toEqual(user.lastName);
    expect(createdUser.password).toEqual(user.password);
    expect(createdUser.id).toEqual(user.id);
  });
  it("Should get user by ID", async () => {
    const user: User = userFactory();
    const userId = user.id!;

    await userRepository.create(user);
    const userFromDb = await userRepository.getById(userId);

    expect(userFromDb!.username).toEqual(user.username);
    expect(userFromDb!.email).toEqual(user.email);
    expect(userFromDb!.firstName).toEqual(user.firstName);
    expect(userFromDb!.lastName).toEqual(user.lastName);
    expect(userFromDb!.password).toEqual(user.password);
    expect(userFromDb!.id).toEqual(user.id);
  });
  it("Should get user by email", async () => {
    const user: User = userFactory();
    const userEmail = user.email;

    await userRepository.create(user);
    const userFromDb = await userRepository.getByEmail(userEmail);

    expect(userFromDb!.username).toEqual(user.username);
    expect(userFromDb!.email).toEqual(user.email);
    expect(userFromDb!.firstName).toEqual(user.firstName);
    expect(userFromDb!.lastName).toEqual(user.lastName);
    expect(userFromDb!.password).toEqual(user.password);
    expect(userFromDb!.id).toEqual(user.id);
  });
});
