import { RequestHandler } from 'express';

import { PostModel } from '../../models/Post';
import { IDeletedPost, IFetchedPosts, IPost } from '../../types/interfaces';

/**
 * Create a post
 *
 * @requires PostModel
 * @returns object
 */
export const createPost: RequestHandler = (req, res, next) => {
  const createPost = new PostModel<IPost>({
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
    published: req.body.published,
    votes: req.body.votes,
    tags: req.body.tags,
  });
  createPost.save();
  res.status(201).json({ message: "Created Post", createdPost: createPost });
};

/**
 * Update a post by its id
 *
 * @requires PostModel
 * @returns object
 */
export const updatePostId: RequestHandler = async (req, res, next) => {
  const updatePost: IPost = {
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
    published: req.body.published,
    votes: req.body.votes,
    tags: req.body.tags,
  };

  const options = { returnDocument: "after", timestamps: true };

  const post = await PostModel.findByIdAndUpdate(
    req.params.id,
    updatePost,
    options
  );

  res.send(post);
};

/**
 * Get all posts
 *
 * @returns Posts object containing an array
 */
export const getPosts: RequestHandler = async (
  req,
  res,
  next
): Promise<IFetchedPosts | void> => {
  const posts = await PostModel.find({});
  res.json({ posts });
};

/**
 * Get posts that are published
 *
 * @returns Posts object containing an array
 */
export const getPublishedPosts: RequestHandler = async (req, res, next) => {
  const posts = await PostModel.find({ published: true });
  res.json({ posts });
};

/**
 * Delete a post with a provided id
 *
 * @requires req.params.id
 * @returns object | void
 */
export const deletePostId: RequestHandler = async (
  req,
  res,
  next
): Promise<IPost | void> => {
  const deletePost = await PostModel.findByIdAndDelete(req.params.id);

  res.send(deletePost);
};

/**
 * Deletes all posts found in the document
 *
 * @returns object | void
 */
export const deleteAllPosts: RequestHandler = async (
  req,
  res,
  next
): Promise<IDeletedPost | void> => {
  const posts = await PostModel.deleteMany({});

  res.json({ posts });
};
