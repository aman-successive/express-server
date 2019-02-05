import { VersionableSchema } from './../versionable/VersionableSchema';
export class UserSchema extends VersionableSchema {
  constructor(options) {
    const userSchema = {
      _id: String,
      email: String,
      name: String,
      password: String,
      role: String,
    };
    super(userSchema, options);
  }
}
