import { Router } from 'express';
import get from './Controller';
export const userRouter: Router = Router();
userRouter.get('/', get);
