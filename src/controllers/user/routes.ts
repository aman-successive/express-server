import { Router } from 'express';
import { validateHandler } from '../../libs/routes';
import { authMiddleWare } from '../../libs/routes';
import validateConfig from '../trainee/validate';
import Controller from './Controller';
export const userRouter: Router = Router();
userRouter.get('/', authMiddleWare('trainee1', 'write'), validateHandler(validateConfig.get), Controller.get);
userRouter.post('/', validateHandler(validateConfig.create), Controller.create);
userRouter.put('/', validateHandler(validateConfig.update), Controller.update);
userRouter.delete('/:name', authMiddleWare('trainee1', 'read'),
validateHandler(validateConfig.delete), Controller.delete);
