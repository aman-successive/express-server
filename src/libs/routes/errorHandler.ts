import { NextFunction, Request, Response } from 'express';
export default function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const { error, message, status } = err;
  res.status(status).json({
    error: error || 'Not Found',
    message: message || 'error',
    status: status || 500,
    timestamp: new Date(),
  });
}
