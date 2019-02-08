import { NextFunction, Request, Response } from 'express';
import { successHandler } from '../../libs/routes';
class Controller {
  public get(req: Request, res: Response): void {
    res.status(202).send(successHandler('AUTHORIZED', 202, 'Verified'));
  }
  public create(req: Request, res: Response, next: NextFunction): void {
    const { name, id } = req.body;
    const data: object = [
      {
        id,
        name,
      },
    ];
    res.status(202).send(successHandler('Success', 202, data));
  }
  public update(req: Request, res: Response, next: NextFunction): void {
    const { dataToUpdate, id } = req.body;
    const data: object = [
      {
        dataToUpdate,
        id,
      },
    ];
    res.status(202).send(successHandler('Success', 202, data));
  }
  public delete(req: Request, res: Response, next: NextFunction): void {
    const { id } = req.param;
    res.status(202).send(successHandler('Data deleted', 202, id));
  }
}
export default new Controller();
