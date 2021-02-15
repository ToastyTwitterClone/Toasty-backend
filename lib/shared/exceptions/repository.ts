import ToastyError from "./base";

export default class RepositoryError extends ToastyError {
  constructor(message: string) {
    super(message);
    this.name = "RepositoryError";
  }
}
