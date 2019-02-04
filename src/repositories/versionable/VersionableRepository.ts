import * as mongoose from 'mongoose';

export class VersionRepo<D extends mongoose.Document, M extends mongoose.Model<D>> {
  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  private model: M;
  constructor(model) {
    this.model = model;
  }
  public createUser(data): Promise<D> {
    const id = VersionRepo.generateObjectId();
    return this.model.create({ ...data, _id: VersionRepo.generateObjectId(), originalId: String(id)});
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
