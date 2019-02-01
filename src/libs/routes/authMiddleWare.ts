import * as jwt from 'jsonwebtoken';
import { UserRepo } from './../../repositories/user/UserRepository';
import hasPermission from './permissions';
const userRepo = new UserRepo();
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
    userRepo.findUser(user).then(() => {
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
    });
    next();
  };
}
