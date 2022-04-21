import mongoose from 'mongoose';

import { IPost } from '../@types/interfaces';

const { Schema } = mongoose;

const Post = new Schema<IPost>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    body: { type: String, required: true },
    published: { type: Boolean, required: true },
    votes: { type: Number, default: 0 },
    tags: { type: [String], required: true },
  },
  { timestamps: true }
);

export const PostModel = mongoose.model("Post", Post);
