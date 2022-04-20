import { RequestHandler } from 'express';

export const getStatus: RequestHandler = (req, res, next) => {
  res.status(200).json({ message: "Server and api running" });
};
