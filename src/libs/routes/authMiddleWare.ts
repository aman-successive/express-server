import * as jwt from 'jsonwebtoken';
import IUserModel from 'src/repositories/user/IUserModel';
import { UserModel } from './../../repositories/user/UserModel';
import { UserRepo } from './../../repositories/user/UserRepository';
import hasPermission from './permissions';
const userRepo = new UserRepo(UserModel);
export default function(module, permissiontype) {
  return (req, res, next) => {
    const token = req.headers.authorization;
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.KEY);
    } catch (error) {
      return next({
        error: 'Not a Valid token',
        message: 'Unauthorised Access',
        status: 401,
      });
    }
    if (!decodedToken) {
      next({
        error: 'Not a Valid token',
        message: 'Unauthorised Access',
        status: 401,
      });
    }
    userRepo.findData({_id: decodedToken.id, deletedAt: undefined}).then((result: IUserModel) => {
      if (hasPermission(module, permissiontype, result.role) === false) {
        next({
          error: 'Not Valid',
          message: 'No Permission',
          status: 404,
        });
      }
      else {
        next();
      }
    })
    .catch ((err) => {
      next({
        error: 'Not Valid',
        message: 'Unauthorised Access',
        status: 401,
      });
    });
  };
}
