import { UserModel } from "./UserModel";
import * as mongoose from "mongoose";
import IUserModel from "./IUserModel";

export class UserRepo {
  private model: mongoose.Model<IUserModel>;
  public static generateObjectId() {
    return String(mongoose.Types.ObjectId);
  }
  constructor() {
    this.model = UserModel;
  }
  public createUser(data): Promise<IUserModel> {
    return this.model.create(data);
  }
  public deleteUser(data) {
    return this.model.deleteMany(data, function(err) {});
  }
}
