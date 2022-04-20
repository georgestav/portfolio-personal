import mongoose from 'mongoose';

import { IPost } from '../types/interfaces';

const { Schema } = mongoose;

export const Post = new Schema<IPost>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
  hidden: { type: Boolean, required: true },
  meta: {
    votes: Number,
    tags: { type: [String], required: true },
  },
});
