import * as jwt from 'jsonwebtoken';
import { UserModel } from './../../repositories/user/UserModel';
import { UserRepo } from './../../repositories/user/UserRepository';
import hasPermission from './permissions';
const userRepo = new UserRepo(UserModel);
export default function(module, permissiontype) {
  return (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token);
    let user;
    try {
      user = jwt.verify(token, process.env.KEY);
    } catch (error) {
      return next({
        error: 'Not Valid',
        message: 'Unauthorised Access',
        status: 401,
      });
    }
    console.log(user);
    const { role } = user;
    console.log(role);
    userRepo.findData({_id: user.id}).then(() => {
      if (!user) {
        next({
          error: 'Not Valid',
          message: 'Unauthorised Access',
          status: 401,
        });
      }
      if (hasPermission(module, permissiontype, role) === false) {
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
    .catch((err) => {
      next({
        error: 'Not Valid',
        message: 'Unauthorised Access',
        status: 401,
      });
    });
  };
}
