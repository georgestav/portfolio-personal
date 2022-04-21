import { json } from 'body-parser';
import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

import postsRoutes from './routes/api/posts';
import statusRoutes from './routes/api/status';

const app = express();
app.use(json());

app.use("/api/posts", postsRoutes);
app.use("/api", statusRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

const dbString = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@database:27017/portfolio?authSource=admin`;
try {
  mongoose.connect(dbString);
  console.log("CONNECTED TO MONGODB!!");
  app.listen(3001);
} catch (error) {
  console.error("Unable to connect to db", error);
}

export default app; //for testing
