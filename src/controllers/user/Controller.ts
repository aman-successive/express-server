import { Request, Response } from "express";
export default function get(req: Request, res: Response, next) {
  console.log("Inside get");
  res.send({
    Name: "User",
    message: "User details",
    status: 200,
    timestamp: new Date()
  });
}
