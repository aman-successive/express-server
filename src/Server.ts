import * as express from "express";
import * as bodyParser from "body-parser";
import {errorHandler,notFoundRoutes} from "./libs/routes";
class Server {
  private app: express.Express;
  bodyParser = require("body-parser");
  public constructor(private config) {
    console.log("inside Constructor");
    this.app = express();
    console.log(config);
  }
  public bootstrap() {
    console.log("inside bootstrap");
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }
  public setupRoutes() {
    console.log("inside setupRoutes");
    this.app.use("/healthCheck", (req, res) => {
      res.send("I am OK");
    });
    this.app.use(notFoundRoutes);
    this.app.use(errorHandler);
  }
  public initBodyParser() {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
  }
  public run() {
    console.log("inside run");
    const {
      app,
      config: { port }
    } = this;
    app.listen(port, err => {
      if (err) {
        throw err;
      }
      console.log(`app is running on port ${port}`);
    });
  }
}
export default Server;
