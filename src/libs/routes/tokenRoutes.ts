import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import IUserModel from 'src/repositories/user/IUserModel';
import { UserModel } from './../../repositories/user/UserModel';
import { UserRepo } from './../../repositories/user/UserRepository';

const userRepo = new UserRepo(UserModel);
export function tokenRoutes() {
  return (req, res , next) => {
    const { emailid, pass } = req.body;
    userRepo.findData({email: emailid }).then((result: IUserModel) => {
      console.log(result);
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
        console.log(token);
        next();
      }
      else {
        next({
          error: 'Wrong Password',
          message: 'Unauthorised Access',
          status: 401,
        });
      }
    })
    .catch((err) => {
      next({
        error: 'User not found',
        message: 'Unauthorised Access',
        status: 404,
      });
    });
  };
}
