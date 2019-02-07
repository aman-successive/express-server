import * as jwt from 'jsonwebtoken';
import { UserRepo } from './../../repositories/user/UserRepository';
import hasPermission from './permissions';
const userRepo = new UserRepo();
export default function(module, permissiontype) {
  return (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token);
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.KEY);
      if (!decodedToken) {
        throw {
          error: 'Not Valid',
          message: 'Unauthorised Access',
          status: 401,
        };
      }
    } catch (error) {
      return next({
        error: 'Not Valid',
        message: 'Unauthorised Access',
        status: 401,
      });
    }
    userRepo.findUser({_id: decodedToken.id}).then((result) => {
      console.log(result);
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
    .catch((err) => {
      next({
        error: 'Not Valid',
        message: 'Unauthorised Access',
        status: 401,
      });
    });
  };
}
