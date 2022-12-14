export class ExpressionValidationError extends Error {
  invalidCharactors: string[];

  constructor(message: string, invalidCharactors: string[]) {
    super(message);
    this.invalidCharactors = invalidCharactors;

    Object.setPrototypeOf(this, ExpressionValidationError.prototype);
  }
}
