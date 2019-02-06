import { UserModel } from "./UserModel";
import * as mongoose from "mongoose";
import IUserModel from "./IUserModel";

export class UserRepo {
  private model: mongoose.Model<IUserModel>;
  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  constructor() {
    this.model = UserModel;
  }
  public createUser(data): Promise<IUserModel> {
    return this.model.create({...data, _id:UserRepo.generateObjectId()});
  }
  public deleteUser(data) {
    return this.model.deleteMany(data, function(err) {});
  }
  public updateUser(data) {
    return this.model.updateMany({ name: "BANNER" }, data, function(err) {});
  }
}
