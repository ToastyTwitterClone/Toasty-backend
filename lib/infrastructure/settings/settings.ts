import UserRepository from "../../domain/user/userRepository";
import UserRepositoryInMemory from "../repositories/user/userRepositoryInMemory";

class Settings {
  public userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
    return Object.freeze(this);
  }
}

const SETTINGS = new Settings(new UserRepositoryInMemory());

export default SETTINGS;
