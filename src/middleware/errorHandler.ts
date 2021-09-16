import { NextFunction, Request, Response } from 'express';

export default (
  error: unknown,
  request: Request,
  response: Response,
  next: NextFunction,
): Response => {
  return response.sendStatus(500);
};
