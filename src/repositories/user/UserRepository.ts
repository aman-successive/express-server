import * as mongoose from 'mongoose';
import { VersionRepo } from './../versionable/VersionableRepository';
import IUserModel from './IUserModel';
import { UserModel } from './UserModel';
const versionRepo = new VersionRepo(UserModel);
export class UserRepo extends VersionRepo<IUserModel, mongoose.Model<IUserModel>> {
  public createUsers(data) {
    return versionRepo.createUser(data);
  }
  public updateData(originalid, dataToUpdate) {
    return versionRepo.updateUser(originalid, dataToUpdate);
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
  public findManyData(skip, limit) {
    return versionRepo.findMultipleData(skip, limit);
  }
}
