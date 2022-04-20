import { RequestHandler } from 'express';
import mongoose from 'mongoose';

import { Post } from '../../schemas/post';

export const createPost: RequestHandler = (req, res, next) => {
  const NewPost = mongoose.model("Post", Post);
  console.log(req.body.meta.tags);
  try {
    const createPost = new NewPost({
      title: req.body.title,
      author: req.body.author,
      body: req.body.body,
      hidden: req.body.hidden,
      meta: { votes: req.body.votes, tags: req.body.tags },
    });
    createPost.save();
    res.status(201).json({ message: "Created Post", createdPost: createPost });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      res.status(400).json({ error });
    }
  }
};
