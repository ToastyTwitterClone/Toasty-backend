import { User } from "./user";

export default interface UserRepository {
  create: (user: User) => Promise<User>;
  getById: (userId: string) => Promise<User>;
  getByEmail: (email: string) => Promise<User>;
}
