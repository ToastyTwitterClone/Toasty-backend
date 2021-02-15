import UserRepository from "../../../domain/user/userRpository";
import { User } from "../../../domain/user/user";
import RepositoryError from "../../../shared/exceptions/repository";

export default class UserRepositoryInMemory implements UserRepository {
  private _database: Array<User>;

  constructor() {
    this._database = [];
  }

  public async create(user: User): Promise<User> {
    const alreadyRegistered = await this.getByEmail(user.email);
    if (alreadyRegistered) {
      throw new RepositoryError("User with this email already exists");
    }
    this._database.push(user);
    return Promise.resolve(user);
  }

  public async getByEmail(email: string): Promise<User | null> {
    for (const user of this._database) {
      if (user.email === email) {
        return Promise.resolve(user);
      }
    }
    return Promise.resolve(null);
  }

  public async getById(userId: string): Promise<User | null> {
    for (const user of this._database) {
      if (user.id === userId) {
        return Promise.resolve(user);
      }
    }
    return Promise.resolve(null);
  }
}
