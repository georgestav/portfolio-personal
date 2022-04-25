import bcrypt from 'bcryptjs';
import { RequestHandler } from 'express';

import { UserModel } from '../../models/User';

export const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const users = await UserModel.find({});
    if (users.length === 0) {
      res.status(404).send({ message: "No users found" });
      return;
    }
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const registerUser: RequestHandler = async (req, res, next) => {
  try {
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPass;
    const newUser = await UserModel.create({ ...req.body });
    res.send(newUser);
  } catch (error) {
    next(error);
  }
};
