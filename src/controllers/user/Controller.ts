import { Request, Response } from 'express';
import { successHandler } from '../../libs/routes';
import { UserRepo } from './../../repositories/user/UserRepository';
const userRepo = new UserRepo();
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
    const { name } = req.body;
    const data = [{
      name,
    }];
    userRepo.updateUser(req.body).then(() => {
      res.status(202).send(successHandler('Success', 202, data));
    });
  }
  public delete(req: Request, res: Response, next) {
    const { name } = req.params;
    const data = [{
      name,
    }];
    userRepo.deleteUser(req.params).then(() => {
      res.status(202).send(successHandler('Success', 202, data));
    });
  }
}
export default new Controller();
