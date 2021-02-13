export default class ToastyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ToastyError";
  }
}
