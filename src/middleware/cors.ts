import { NextFunction, Request, Response } from 'express';

export default (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  response.setHeader('Access-Control-Allow-Headers', '*');
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.setHeader('Access-Control-Allow-Methods', '*');
  response.setHeader('Access-Control-Max-Age', '600');
  next();
};
