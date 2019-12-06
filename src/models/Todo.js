import { Schema, model } from 'mongoose';

const TodoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

export default model('Todo', TodoSchema);
