import * as mongoose from 'mongoose';
import { VersionRepo } from './../versionable/VersionableRepository';
import IUserModel from './IUserModel';
import { UserModel } from './UserModel';
const versionRepo = new VersionRepo(UserModel);
export class UserRepo extends VersionRepo<IUserModel, mongoose.Model<IUserModel>> {
  public createUsers(data): Promise<mongoose.Document> {
    return versionRepo.createUser(data);
  }
  public updateData(originalid, dataToUpdate): Promise<mongoose.Document> {
    return versionRepo.updateUser(originalid, dataToUpdate);
  }
  public deleteData(data) {
    return versionRepo.deleteUser(data);
  }
  public findData(data): mongoose.DocumentQuery<mongoose.Document, mongoose.Document, {}> {
    return versionRepo.findUser(data);
  }
  public countData(): mongoose.Query<number> {
    return versionRepo.countUser();
  }
  public findManyData(skip, limit): mongoose.DocumentQuery<mongoose.Document[], mongoose.Document, {}> {
    return versionRepo.findMultipleData(skip, limit);
  }
}
