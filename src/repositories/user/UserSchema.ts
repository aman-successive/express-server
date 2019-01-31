import * as mongoose from "mongoose";
export class UserSchema extends mongoose.Schema {
  constructor(options) {
    const userSchema = {
      name: String
    };
    super(userSchema, options);
  }
}
