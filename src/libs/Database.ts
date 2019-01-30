import * as mongoose from "mongoose";
class Database {
  open(mongoUrl) {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(
          mongoUrl,
          { useNewUrlParser: true }
        )
        .then(result => {
          resolve(result);
          console.log("connected");
        })
        .catch(err => {
          reject(err);
          console.log("not connected");
        });
    });
  }
  disconnect() {
    mongoose.connection.close();
  }
}
export default new Database();
