import * as mongoose from 'mongoose';

export default interface IUserModel extends mongoose.Document {
  name: string;
  role: string;
  email: string;
}
