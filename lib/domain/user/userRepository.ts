import { User } from "./user";

export default interface UserRepository {
  create: (user: User) => Promise<User | null>;
  getById: (userId: string) => Promise<User | null>;
  getByEmail: (email: string) => Promise<User | null>;
}
