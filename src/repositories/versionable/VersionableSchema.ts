import * as mongoose from 'mongoose';
export class VersionableSchema extends mongoose.Schema {
  constructor(collections, options: any) {
    const versionSchema = Object.assign({
      DeletedAt: {
        default: new Date(),
        required: true,
        type: Date,
      },
      collections,
      createdAt: {
        default: new Date(),
        required: true,
        type: Date,
      },
      originalId: {
        required: true,
        type: String,
      },
    });
    super(versionSchema, options);
  }
}
