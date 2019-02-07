import * as mongoose from 'mongoose';
import { log } from 'util';

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
  public countUser(): mongoose.Query<number> {
    return this.model.countDocuments();
  }
  public updateUser(oldData, dataToUpdate): Promise<D> {
    const createDate = new Date();
    const keys = Object.keys(dataToUpdate);
    keys.forEach((key) => { oldData[key] = dataToUpdate[key]; });
    oldData.createdAt = createDate;
    const oldId = oldData._id;
    oldData._id = this.generateObjectId();
    return this.model.updateOne({_id: oldId}, { $set: { deletedAt: createDate }}).then(() => {
    return this.model.insertMany(oldData);
    });
    }
  // public updateUser(originalId, newValues) {
  //   const record = this.model
  //   .findOne({ originalId, deletedAt: { $exists: false } })
  //   .lean();
  //   const date = new Date();
  //   const newData = Object.assign(record, newValues, { createdAt: date });
  //   this.model.create(...newData);
  //   this.model.updateOne({ _id: record._id }, { deletedAt: date });
  //   }
  public findUser(data) {
    return this.model.findOne(data);
  }
  public findMultipleData(data, value1, value2) {
    return this.model.find(data, undefined, { skip: value1, limit: value2}, (err, result) => {
      console.log(err);
    });
  }
}
