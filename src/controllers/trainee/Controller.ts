import { successHandler } from "../../libs/routes";
import { Response, Request } from "express";

class Controller {
  get(req: Request, res: Response) {
    console.log("Inside get");
    res.send({
      Name: "Trainee1",
      message: "get details",
      status: 200,
      timestamp: new Date()
    });
  }
  post(req: Request, res: Response, next) {
    const { name, id } = req.body;
    const data = [
      {
        name: name,
        id: id
      }
    ];
    if (!name) {
      return next({ error: "Name not found", message: "Error", status: 404 });
    }
    if (!id) {
      return next({ error: "id not found", message: "Error", status: 404 });
    }
    if (!id && !name) {
      return next({ error: "No data found", message: "Error", status: 404 });
    }
    res.status(202).send(successHandler("Success", 202, data));
  }
  put(req: Request, res: Response, next) {
    const data = [
      {
        Name: "Trainee1",
        id: 456
      }
    ];
    res.status(202).send(successHandler("Success", 202, data));
  }
  delete(req: Request, res: Response, next) {
    res.status(202).send(successHandler("Data deleted", 202, null));
  }
}
export default new Controller();
