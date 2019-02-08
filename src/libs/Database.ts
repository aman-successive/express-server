import * as mongoose from 'mongoose';
import seedData from './seedData';
class Database {
  public open(mongoUrl): Promise<{}> {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(
          mongoUrl,
          { useNewUrlParser: true },
        )
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
      seedData();
    });
  }
  public disconnect(): void {
    mongoose.connection.close();
  }
}
export default new Database();
