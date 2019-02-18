import * as mongoose from 'mongoose';
import { log } from 'util';

export class VersionRepo<D extends mongoose.Document, M extends mongoose.Model<D>> {
  private model: M;
  constructor(model) {
    this.model = model;
  }
  public generateObjectId(): string {
    return String(mongoose.Types.ObjectId());
  }
  public createUser(data): Promise<D> {
    const id = this.generateObjectId();
    return this.model.create({ ...data, _id: id, originalId: id});
  }
  public async deleteUser(data) {
    const user = await this.findUser({originalId: data, deletedAt: undefined});
    try {
      return this.model.updateOne({_id: user._id}, {$set: { deletedAt: new Date() }});
    }
    catch (err) {
      console.log(err);
    }
  }
  public countUser(): mongoose.Query<number> {
    return this.model.countDocuments();
  }
  public async updateUser(oldData, dataToUpdate): Promise<D> {
    const createDate = new Date();
    const keys = Object.keys(dataToUpdate);
    keys.forEach((key) => { oldData[key] = dataToUpdate[key]; });
    oldData.createdAt = createDate;
    const oldId = oldData._id;
    oldData._id = this.generateObjectId();
    const result = await this.model.updateOne({_id: oldId}, { $set: { deletedAt: createDate }});
    try {
      return this.model.insertMany(oldData);
    }
    catch (err) {
      console.log(err);
    }
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
  public findUser(data): mongoose.DocumentQuery<D, D, {}> {
    return this.model.findOne(data);
  }
  public findMultipleData(value1, value2): mongoose.DocumentQuery<D[], D, {}> {
    // tslint:disable-next-line:no-null-keyword
    return this.model.find({}, null, { skip: Number(value1), limit: Number(value2)}, (err, result) => {
      console.log(err);
    });
  }
}
