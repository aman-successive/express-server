import { Request, Response } from 'express';
import { successHandler } from '../../libs/routes';
class Controller {
  public get(req: Request, res: Response) {
    res.status(202).send(successHandler('AUTHORIZED', 202, 'Verified'));
  }
  public create(req: Request, res: Response, next) {
    const { name, id } = req.body;
    const data = [
      {
        id,
        name,
      },
    ];
    // if (!name) {
    //   return next({ error: "Name not found", message: "Error", status: 404 });
    // }
    // if (!id) {
    //   return next({ error: "id not found", message: "Error", status: 404 });
    // }
    res.status(202).send(successHandler('Success', 202, data));
  }
  public update(req: Request, res: Response, next) {
    const { dataToUpdate, id } = req.body;
    const data = [
      {
        dataToUpdate,
        id,
      },
    ];
    res.status(202).send(successHandler('Success', 202, data));
  }
  public delete(req: Request, res: Response, next) {
    const { id } = req.param;
    console.log('inside delete');
    res.status(202).send(successHandler('Data deleted', 202, id));
  }
}
export default new Controller();
