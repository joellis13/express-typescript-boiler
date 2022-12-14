import { Controller, Get, Path, Response, Route, Tags } from "tsoa";
import { ExpressionValidationError } from "../errors/expressionValidationError";
import { ExpressionService } from "../services";

@Route("expression")
@Tags("Expression")
export class ExpressionController extends Controller {
  @Response<ExpressionValidationError>("400")
  @Get("evaluate/{expression}")
  public async evaluateExpression(@Path() expression: string): Promise<number> {
    return new ExpressionService().parseAndEvaluateExpression(expression);
  }
}
