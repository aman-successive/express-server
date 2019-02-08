import * as bodyParser from 'body-parser';
import * as express from 'express';
import Database from './libs/Database';
import { errorHandler, notFoundRoutes } from './libs/routes';
import { router } from './router';
class Server {
  private app: express.Express;
  public constructor(private config) {
    this.app = express();
  }
  public bootstrap() {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }
  public setupRoutes(): void {
    this.app.use('/healthCheck', (req: Request, res) => {
      res.send('I am OK');
    });
    this.app.use('/api', router);
    this.app.use(notFoundRoutes);
    this.app.use(errorHandler);
  }
  public initBodyParser(): void {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
  }
  public async run(): Promise<void> {
    const {
      app,
      config: { port, mongoUrl },
    } = this;
    const result = await Database.open(mongoUrl);
    try {
        app.listen(port, (err) => {
          if (err) {
            throw err;
          }
          console.log(`app is running on port ${port}`);
        });
      }
    catch (err) {
        console.log('NOT RUNNING');
      }
  }
}
export default Server;
