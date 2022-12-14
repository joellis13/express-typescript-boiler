import { ExpressionValidationError } from "../errors/expressionValidationError";

export const expressionSymbols: string[] = ["(", ")", "+", "-", "*", "/", "."];

export class ExpressionService {
  public parseAndEvaluateExpression(expression: string): number {
    this.validateExpression(expression);
    return eval(expression);
  }

  validateExpression(expression: string): void {
    const invalidChars = expression
      .replaceAll(" ", "")
      .split("")
      .filter(
        (char) => isNaN(parseInt(char)) && !expressionSymbols.includes(char)
      );

    if (invalidChars.length) {
      console.error("Expression submitted with invalid characters:", [
        ...new Set(invalidChars),
      ]);

      throw new ExpressionValidationError(
        "Expression submitted with invalid characters",
        [...new Set(invalidChars)]
      );
    }
  }
}
