
import { Request, Response } from 'express';
import { successHandler } from '../../libs/routes';
import { UserModel } from './../../repositories/user/UserModel';
import { UserRepo } from './../../repositories/user/UserRepository';
const userRepo = new UserRepo(UserModel);
class Controller {
  public get(req: Request, res: Response, next) {
    const {skip, limit} = req.query;
    userRepo.findManyData(skip, limit).then((data) => {
      console.log(data);
      res.status(200).send(successHandler('Success', 202, data));
    });
  }
  public create(req: Request, res: Response, next) {
    const { name, email, password, role } = req.body;
    const data = [{
      email,
      name,
      password,
      role,
    }];
    userRepo.createUser(req.body).then(() => {
      res.status(202).send(successHandler('Success', 202, data));
    });
  }
  public update(req: Request, res: Response, next) {
    const { id, dataToUpdate } = req.body;
    const data = [{
      id,
    }];
    // userRepo.updateData(id, dataToUpdate).then(() => {
    //   res.status(202).send(successHandler('Success', 202, data));
    // });
    userRepo.findData({originalId: id, deletedAt: undefined}).then((result) => {
      console.log(result);
      userRepo.updateData(result, dataToUpdate).then(() => {
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
    res.status(200).send(successHandler('Token Generated', 202, 'OK'));
  }
}
export default new Controller();
