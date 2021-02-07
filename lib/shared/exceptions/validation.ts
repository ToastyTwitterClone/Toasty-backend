import ToastyError from "./base";

export default class ValidationError extends ToastyError {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}
