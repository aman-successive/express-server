import { NextFunction } from 'express';
export default function(value, type: string, next: NextFunction): void {
  if (typeof value !== type) {
    next({
      error: 'Not Valid',
      message: `${value} is not a ${type}`,
      status: 401,
    });
  }
}
