import { NextFunction, Request, Response } from 'express';
export default function notFoundRoutes(req: Request, res: Response, next: NextFunction): void {
  next({ error: 'Not found', message: 'Error', status: 404 });
}
