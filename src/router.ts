import userRouter from "./controllers/user";
import traineeRouter from "./controllers/trainee";
import { Router } from "express";
export const router: Router = Router();
router.use("/trainee", traineeRouter);
router.use("/user", userRouter);
