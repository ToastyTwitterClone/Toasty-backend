export default class BaseValidator {
  // eslint-disable-next-line
  protected _validated: any;

  // eslint-disable-next-line
  public getValidatedData(): any {
    return this._validated;
  }
}
