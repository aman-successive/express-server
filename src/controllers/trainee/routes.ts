import { Router } from 'express';
import { validateHandler } from '../../libs/routes';
import { authMiddleWare } from '../../libs/routes';
import Controller from './Controller';
import validateConfig from './validate';
export const traineeRouter: Router = Router();
traineeRouter.get('/', authMiddleWare('trainee1', 'read'), validateHandler(validateConfig.get), Controller.get);
traineeRouter.post('/', authMiddleWare('trainee1', 'read'), validateHandler(validateConfig.create), Controller.create);
traineeRouter.put('/', authMiddleWare('trainee1', 'read'), validateHandler(validateConfig.update), Controller.update);
traineeRouter.delete('/:id', authMiddleWare('trainee1', 'read'),
validateHandler(validateConfig.delete), Controller.delete);
