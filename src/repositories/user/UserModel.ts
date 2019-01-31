import { UserSchema } from "./UserSchema";
import IUserModel from "./IUserModel";
import * as mongoose from "mongoose";

const userSchema = new UserSchema({
  collection: "user"
});

export const UserModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>(
  "user",
  userSchema,
  "user",
  true
);
