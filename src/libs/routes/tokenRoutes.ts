import * as bcrypt from 'bcrypt';
import { NextFunction, Request, Response, Router } from 'express';
import * as jwt from 'jsonwebtoken';
import IUserModel from 'src/repositories/user/IUserModel';
import { successHandler } from '.';
import validateConfig from '../../controllers/user/validate';
import { UserModel } from './../../repositories/user/UserModel';
import { UserRepo } from './../../repositories/user/UserRepository';
import validateHandler from './validateHandler';

const userRepo = new UserRepo(UserModel);
export const tokenRoutes: Router = Router();
tokenRoutes.get('/', validateHandler(validateConfig.get),
(req: Request, res: Response , next: NextFunction) => {
  const { emailid, pass } = req.body;
  userRepo.findData({email: emailid }).then((result: IUserModel) => {
    if (!result) {
      next({
        error: 'Invalid Email',
        message: 'Unauthorised Access',
        status: 401,
      });
    }
    const { password } = result;
    if (bcrypt.compareSync(pass, password)) {
      const token = jwt.sign({ result, iat: Math.floor(Date.now() / 1000) - 900 }, process.env.KEY);
      res.status(202).send(successHandler('Success', 202, token));
    }
    else {
      next({
        error: 'Wrong Password',
        message: 'Unauthorised Access',
        status: 401,
      });
    }
  })
  .catch ((err) => {
    next({
      error: 'User not found',
      message: 'Unauthorised Access',
      status: 404,
    });
  });
},
);
