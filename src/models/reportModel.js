import { model, Schema } from 'mongoose';

const reportSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ['P', 'A', 'O', 'H']
      }
    }
  },
  { timestamps: true }
);

const reportModel = model('user', reportSchema);
export default reportModel;
