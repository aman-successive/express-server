import { Request, Response } from "express";
export default function notFoundRoutes(req: Request, res: Response, next) {
  console.log("Inside notFoundRoutes");
  next({ error: "Not found", message: "Error", status: 404 });
}
