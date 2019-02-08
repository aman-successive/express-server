
import { NextFunction, Request, Response } from 'express';
import { successHandler } from '../../libs/routes';
import { UserModel } from './../../repositories/user/UserModel';
import { UserRepo } from './../../repositories/user/UserRepository';
const userRepo = new UserRepo(UserModel);
class Controller {
  public async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    const {skip = 0, limit = 10} = req.query;
    const result = await userRepo.findManyData(skip, limit);
    try {
      userRepo.countData().then((documents) => {
        const data = [{
          documents,
          result,
        }];
        res.status(200).send(successHandler('Success', 202, data));
      });
    }
    catch (err) {
      console.log('Could not find documents');
    }
  }
  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { name, email, password, role } = req.body;
    const data: object = [{
      email,
      name,
      password,
      role,
    }];
    const result = await userRepo.createUser(req.body);
    try {
      res.status(202).send(successHandler('Success', 202, data));
    }
    catch (err) {
      console.log('Could not create new User');
    }
  }
  public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id, dataToUpdate } = req.body;
    const data: object = [{
      id,
    }];
    const results = await userRepo.findData({originalId: id, deletedAt: undefined});
    try {
      const result = userRepo.updateData(results, dataToUpdate);
      try {
    res.status(202).send(successHandler('Success', 202, data));
      }
      catch (err) {
        console.log('Could not update Data');
      }
    }
    catch (err) {
      console.log('Could not find data');
    }
  }
  public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;
    const data: object = [{
      id,
    }];
    const result = await userRepo.deleteData(id);
    try {
      res.status(202).send(successHandler('Data Deleted', 202, data));
    }
    catch (err) {
      console.log('Could not delete data');
    }
  }
}
export default new Controller();
