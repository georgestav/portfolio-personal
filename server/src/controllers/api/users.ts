import bcrypt from 'bcryptjs';
import { RequestHandler } from 'express';

import { IUser, IUserResponse } from '../../@types/UserTypes';
import { UserModel } from '../../models/User';

/**
 * Get all users found on db
 * returns array of users
 *
 * @param req
 * @param res
 * @param next
 * @returns array of objects
 */
export const getAllUsers: RequestHandler = async (
  req,
  res,
  next
): Promise<IUser[] | void> => {
  try {
    const users = await UserModel.find({});
    if (users.length === 0) {
      res.status(404).send({ message: "No users found" });
      return;
    }
    const response = users.map((user) => {
      console.log(user);
      return {
        username: user.username,
        role: user.role,
        createdAt: user.createdAt,
      };
    });

    res.json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * Create new user with password hash
 * On success returns object
 *
 * @param req
 * @param res
 * @param next
 * @returns object
 */
export const registerUser: RequestHandler = async (
  req,
  res,
  next
): Promise<IUserResponse | void> => {
  try {
    //type check, in case no salt is found
    if (!process.env.BCRYPT_SALT) throw new Error("hashing not possible");

    //hash the password
    const hashedPass = await bcrypt.hash(
      req.body.password,
      +process.env.BCRYPT_SALT
    );
    req.body.password = hashedPass;

    //save user to database
    const newUser = await UserModel.create({ ...req.body });

    //response
    const successResponse: IUserResponse = {
      username: newUser.username,
      email: newUser.email,
      message: "created",
    };

    res.send(successResponse);
  } catch (error) {
    next(error);
  }
};

/**
 * Delete user by providing a user ID
 *
 * @param req
 * @param res
 * @param next
 * @returns object
 */
export const deleteUserById: RequestHandler = async (
  req,
  res,
  next
): Promise<IUserResponse | void> => {
  try {
    const deleteUser = await UserModel.findByIdAndDelete(req.params.id);
    if (!deleteUser) {
      res.status(404).send({ message: "No user found with the provided ID" });
      return;
    }
    const successResponse: IUserResponse = {
      username: deleteUser.username,
      email: deleteUser.email,
      message: "deleted",
    };
    res.send(successResponse);
  } catch (error) {
    next(error);
  }
};
