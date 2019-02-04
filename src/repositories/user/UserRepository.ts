import * as mongoose from 'mongoose';
import { VersionRepo } from './../versionable/VersionableRepository';
import { UserModel } from './UserModel';
import IUserModel from './IUserModel';
const versionRepo = new VersionRepo(UserModel);
export class UserRepo extends VersionRepo<IUserModel, mongoose.Model<IUserModel>> {
  public createUser(data) {
    return versionRepo.createUser(data);
  }
  public updateData(data) {
    return versionRepo.updateUser(data);
  }
  public deleteData(data) {
    return versionRepo.deleteUser(data);
  }
  public findData(data) {
    return versionRepo.findUser(data);
  }
  public countData() {
    return versionRepo.countUser();
  }
}
