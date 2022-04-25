import mongoose from 'mongoose';

import { IUser } from '../@types/UserTypes';

const { Schema } = mongoose;

const User = new Schema<IUser>(
  {
    username: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: Number, required: true, default: 2 },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("User", User);
