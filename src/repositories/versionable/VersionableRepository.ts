import * as mongoose from 'mongoose';

export class VersionRepo<D extends mongoose.Document, M extends mongoose.Model<D>> {
  private model: M;
  constructor(model) {
    this.model = model;
  }
  public generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  public createUser(data): Promise<D> {
    const id = this.generateObjectId();
    console.log(id);
    return this.model.create({ ...data, _id: id, originalId: id});
  }
  public deleteUser(data) {
    return this.model.deleteMany(data, (err) => {
      console.log('Error');
    });
  }
  public countUser() {
    return this.model.countDocuments();
  }
  public updateUser(oldData) {
    const createDate = new Date();
    oldData.createdAt = createDate;
    const oldId = oldData._id;
    oldData._id = this.generateObjectId();
    return this.model.updateOne({_id: oldId}, { $set: { deletedAt: createDate }}).then(() => {
    return this.model.insertMany(oldData);
    });
    }
  public findUser(data) {
    return this.model.findOne(data);
  }
}
