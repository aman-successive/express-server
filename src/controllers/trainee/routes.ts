import { Router } from "express";
import Controller from "./Controller";
import { validateHandler } from "../../libs/routes";
import validateConfig from "./validate";
export const traineeRouter: Router = Router();
traineeRouter.get("/", validateHandler(validateConfig.get), Controller.get);
traineeRouter.post("/", validateHandler(validateConfig.create), Controller.create);
traineeRouter.put("/", validateHandler(validateConfig.update), Controller.update);
traineeRouter.delete("/:id", validateHandler(validateConfig.delete), Controller.delete);
