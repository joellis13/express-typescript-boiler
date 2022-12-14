import { NextFunction, Request, Response } from "express";
import { ExpressionValidationError } from "../errors";

export function errorHandler(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Response | void {
  if (err instanceof ExpressionValidationError) {
    console.error(
      `ExpressionValidationError occurred | ${err.message}: [${err.invalidCharactors}]`
    );

    return res.status(400).json({
      message: err.message,
      invalidCharactors: err.invalidCharactors,
    });
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: `Exception caught for ${req.path}:\n\tError: ${err}`,
    });
  }

  next();
}
