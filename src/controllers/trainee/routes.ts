import { Router } from "express";
import Controller from "./Controller";
export const traineeRouter: Router = Router();
traineeRouter.get("/", Controller.get);
traineeRouter.post("/", Controller.post);
traineeRouter.put("/", Controller.put);
traineeRouter.delete("/", Controller.delete);
