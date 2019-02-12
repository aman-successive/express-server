import { Router } from 'express';
import { authMiddleWare } from '../../libs/routes';
import Controller from './Controller';
export const userRouter: Router = Router();
userRouter.get('/', authMiddleWare('trainee1', 'write'), Controller.get);
userRouter.post('/', Controller.create);
userRouter.put('/', Controller.update);
userRouter.delete('/:name',  Controller.delete);
