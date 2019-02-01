import * as jwt from 'jsonwebtoken';
import hasPermission from './permissions';
export default function(module, permissiontype) {
  return (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token);
    let decode;
    try {
      decode = jwt.verify(token, process.env.KEY);
    } catch (error) {
      return next({
        error: 'Not Valid',
        message: 'Unauthorised Access',
        status: 401,
      });
    }
    console.log(decode);
    if (!decode) {
      next({
        error: 'Not Valid',
        message: 'Unauthorised Access',
        status: 401,
      });
    }
    const { role } = decode;
    console.log(role);
    if (hasPermission(module, permissiontype, role) === false) {
      next({
        error: 'Not Valid',
        message: 'No Permission',
        status: 401,
      });
    }
    next();
  };
}
