import * as mongoose from 'mongoose';
export class VersionableSchema extends mongoose.Schema {
  constructor(collections, options: any) {
    const versionSchema = Object.assign({
      createdAt: {
        default: new Date(),
        required: true,
        type: Date,
      },
      deletedAt: {
        required: false,
        type: Date,
      },
      originalId: {
        required: true,
        type: String,
      },
    },
    collections);
    super(versionSchema, options);
  }
}
