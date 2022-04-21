import mongoose from 'mongoose';

const { Schema } = mongoose;

const User = new Schema(
  {
    username: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: Number, required: true, default: 2 },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("User", User);
