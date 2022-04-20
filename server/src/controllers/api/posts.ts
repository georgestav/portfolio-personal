import { RequestHandler } from 'express';

import { Post } from '../../models/post';

const POSTS: Post[] = [];

export const createPost: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newPost = new Post(Math.random().toString(), "test post");

  POSTS.push(newPost);
  console.log("POSTS!!!!!!");

  res.status(201).json({ message: "Created Post", createdPost: newPost });
};
