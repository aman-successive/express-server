import { Router } from 'express';
import traineeRouter from './controllers/trainee';
import userRouter from './controllers/user';
import { tokenRoutes } from './libs/routes';
export const router: Router = Router();
router.use('/trainee', traineeRouter);
router.use('/user', userRouter);
router.use('/token', tokenRoutes);
