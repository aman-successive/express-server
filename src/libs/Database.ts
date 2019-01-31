import * as mongoose from "mongoose";
import seedData from "./seedData";
class Database {
  open(mongoUrl) {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(
          mongoUrl,
          { useNewUrlParser: true }
        )
        .then(() => {
          resolve();
          console.log("connected");
        })
        .catch(err => {
          reject(err);
          console.log("not connected");
        });
        seedData();
    });
  }
  disconnect() {
    mongoose.connection.close();
  }
}
export default new Database();
