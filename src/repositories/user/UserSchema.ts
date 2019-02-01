import * as mongoose from 'mongoose';
export class UserSchema extends mongoose.Schema {
  constructor(options) {
    const userSchema = {
      _id: String,
      email: String,
      name: String,
      role: String,
    };
    super(userSchema, options);
  }
}
