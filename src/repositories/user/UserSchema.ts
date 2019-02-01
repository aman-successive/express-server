import * as mongoose from "mongoose";
export class UserSchema extends mongoose.Schema {
  constructor(options) {
    const userSchema = {
      _id: String,
      name: String
    };
    super(userSchema, options);
  }
}
