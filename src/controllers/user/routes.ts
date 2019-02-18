import { Router } from 'express';
import { validateHandler } from '../../libs/routes';
import { authMiddleWare } from '../../libs/routes';
import Controller from './Controller';
import validateConfig from './validate';
export const userRouter: Router = Router();
userRouter.get('/', authMiddleWare('trainee1', 'read'), validateHandler(validateConfig.get), Controller.get);
userRouter.post('/', authMiddleWare('trainee1', 'write'), validateHandler(validateConfig.create), Controller.create);
userRouter.put('/', authMiddleWare('trainee1', 'write'), validateHandler(validateConfig.update), Controller.update);
// tslint:disable-next-line:max-line-length
userRouter.delete('/:id', authMiddleWare('trainee1', 'delete'), validateHandler(validateConfig.delete), Controller.delete);
