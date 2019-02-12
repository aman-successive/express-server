
import { Request, Response } from 'express';
import { successHandler } from '../../libs/routes';
import { UserModel } from './../../repositories/user/UserModel';
import { UserRepo } from './../../repositories/user/UserRepository';
const userRepo = new UserRepo(UserModel);
class Controller {
  public get(req: Request, res: Response, next) {
    res.status(200).send(successHandler('Success', 202, 'OK'));
  }
  public create(req: Request, res: Response, next) {
    const { name } = req.body;
    const data = [{
      name,
    }];
    userRepo.createUser(req.body).then(() => {
      res.status(202).send(successHandler('Success', 202, data));
    });
  }
  public update(req: Request, res: Response, next) {
    const { emailid } = req.body;
    const data = [{
      emailid,
    }];
    userRepo.findData({email: emailid, deletedAt: undefined}).then((result) => {
      console.log(result);
      userRepo.updateData(result).then(() => {
        res.status(202).send(successHandler('Success', 202, data));
      });
    });
  }
  public delete(req: Request, res: Response, next) {
    const { name } = req.params;
    const data = [{
      name,
    }];
    userRepo.deleteData(req.params).then(() => {
      res.status(202).send(successHandler('Success', 202, data));
    });
  }
  public createToken(req: Request, res: Response, next) {
    const token = req.body.data;
    res.status(200).send(successHandler('Token Generated', 202, token));
  }
}
export default new Controller();
