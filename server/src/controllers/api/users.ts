import { RequestHandler } from 'express';

import { UserModel } from '../../models/User';

export const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const users = await UserModel.find({});
    if (users.length === 0) {
      res.status(404).send({ message: "No users found" });
      return;
    }
    res.json({ users });
  } catch (error) {
    next(error);
  }
};
