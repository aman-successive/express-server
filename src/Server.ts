import * as bodyParser from 'body-parser';
import * as express from 'express';
import Database from './libs/Database';
import { errorHandler, notFoundRoutes } from './libs/routes';
import { router } from './router';
class Server {
  private app: express.Express;
  public constructor(private config) {
    console.log('inside Constructor');
    this.app = express();
    console.log(config);
  }
  public bootstrap() {
    console.log('inside bootstrap');
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }
  public setupRoutes() {
    console.log('inside setupRoutes');
    this.app.use('/healthCheck', (req, res) => {
      res.send('I am OK');
    });
    this.app.use('/api', router);
    this.app.use(notFoundRoutes);
    this.app.use(errorHandler);
  }
  public initBodyParser() {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
  }
  public run() {
    console.log('inside run');
    const {
      app,
      config: { port, mongoUrl },
    } = this;
    Database.open(mongoUrl)
      .then(() => {
        app.listen(port, (err) => {
          if (err) {
            throw err;
          }
          console.log(`app is running on port ${port}`);
        });
      })
      .catch((err) => {
        console.log('NOT RUNNING');
      });
  }
}
export default Server;
