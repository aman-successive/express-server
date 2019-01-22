import * as express from "express";
class Server {
  private app: express.Express;
  public constructor(private config) {
    console.log('inside Constructor');
    this.app = express();
    console.log(config);
  }
  public bootstrap() {
    console.log('inside bootstrap');
    this.setupRoutes();
    return this;
  }
  public setupRoutes() {
    console.log('inside setupRoutes')
    this.app.use("/healthCheck", (req, res) => {
      res.send("I am OK");
    });
  }
  public run() {
    console.log('inside run')
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
