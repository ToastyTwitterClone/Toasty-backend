import UserRepository from "../../../domain/user/userRepository";
import { User } from "../../../domain/user/user";
import RepositoryError from "../../../shared/exceptions/repository";

export default class UserRepositoryInMemory implements UserRepository {
  private _database: Array<User>;

  constructor() {
    this._database = [];
  }

  public async create(user: User): Promise<User> {
    let alreadyRegistered: null | User = null;
    try {
      alreadyRegistered = await this.getByEmail(user.email);
    } catch (RepositoryError) {
      // User is not in DB
    }
    if (alreadyRegistered) {
      throw new RepositoryError("User with this email already exists");
    }
    this._database.push(user);
    return Promise.resolve(user);
  }

  public async getByEmail(email: string): Promise<User> {
    for (const user of this._database) {
      if (user.email === email) {
        return Promise.resolve(user);
      }
    }
    throw new RepositoryError(`User with email ${email} doesn't exists`);
  }

  public async getById(userId: string): Promise<User> {
    for (const user of this._database) {
      if (user.id === userId) {
        return Promise.resolve(user);
      }
    }
    throw new RepositoryError(`User with id ${userId} doesn't exists`);
  }
}
