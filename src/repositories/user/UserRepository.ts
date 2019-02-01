import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { UserModel } from './UserModel';

export class UserRepo {
  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  private model: mongoose.Model<IUserModel>;
  constructor() {
    this.model = UserModel;
  }
  public createUser(data): Promise<IUserModel> {
    return this.model.create({ ...data, _id: UserRepo.generateObjectId() });
  }
  public deleteUser(data) {
    return this.model.deleteMany(data, (err) => {
      console.log('Error');
    });
  }
  public countUser() {
    return this.model.countDocuments();
  }
  public updateUser(data) {
    return this.model.updateMany({ name: 'BANNER' }, data, (err) => {
      console.log('Error');
    });
  }
  public findUser(data) {
    return this.model.findOne(data);
  }
}
