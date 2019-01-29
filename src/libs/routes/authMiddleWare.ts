import * as jwt from "jsonwebtoken";
import hasPermission from "./permissions";
export default function(module, permissiontype) {
  return function(req, res, next) {
    const token = req.headers["authorization"];
    console.log(token);
    const decode = jwt.verify(token, process.env.KEY, (err, res) => {
      if (err) {
        return false;
      }
      return res;
    });
    console.log(decode);
    if (!decode) {
      next({
        error: "Not Valid",
        message: "Unauthorised Access",
        status: 401
      });
    }
    const { role } = decode;
    console.log(role);
    if (hasPermission(module, permissiontype, role) == false) {
      next({
        error: "Not Valid",
        message: "No Permission",
        status: 401
      });
    }
    next();
  };
}
