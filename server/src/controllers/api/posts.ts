import { RequestHandler } from 'express';

import { IDeletedPost, IFetchedPosts, IPost, IPostOptional } from '../../@types/PostTypes';
import { PostModel } from '../../models/Post';

/**
 * Create a post
 *
 * @requires PostModel
 * @returns object
 */
export const createPost: RequestHandler = (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

/**
 * Update a post by its id
 *
 * @requires PostModel
 * @returns object
 */
export const updatePostId: RequestHandler = async (req, res, next) => {
  try {
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
    if (!post) {
      res
        .status(404)
        .send({ message: "No post found matching the provided ID" });
      return;
    }
    res.send(post);
  } catch (error) {
    next(error);
  }
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
  try {
    const posts = await PostModel.find({});
    if (posts.length === 0) {
      res.status(404).send({ message: "No posts found" });
      return;
    }
    res.json({ posts });
  } catch (error) {
    next(error);
  }
};

/**
 * Get posts that are published
 *
 * @returns Posts object containing an array
 */
export const getPublishedPosts: RequestHandler = async (
  req,
  res,
  next
): Promise<IFetchedPosts | void> => {
  try {
    const posts = await PostModel.find({ published: true });
    if (posts.length === 0) {
      res.status(404).send({ message: "No published posts found" });
      return;
    }
    res.json({ posts });
  } catch (error) {
    next(error);
  }
};

/**
 *  Get the posts of an author providing the authors name,
 *  optionally the published status as a boolean or 0, 1
 *
 * @params :author
 * @params :published? as boolean or 0, 1
 * @returns object
 */
export const getPostsByAuthor: RequestHandler = async (
  req,
  res,
  next
): Promise<IFetchedPosts | void> => {
  try {
    const options: IPostOptional = {
      author: req.params.author,
    };

    if (req.params.published) {
      options.published =
        req.params.published === "true" || +req.params.published === 1
          ? true
          : false;
    }

    const posts = await PostModel.find(options);

    if (posts.length === 0) {
      if (options.published) {
        res
          .status(404)
          .send({ message: "No published posts found for this Author" });
        return;
      }
      res.status(404).send({ message: "No posts found for this Author" });
      return;
    }
    res.json({ posts });
  } catch (error) {
    next(error);
  }
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
  try {
    const deletePost = await PostModel.findByIdAndDelete(req.params.id);
    if (!deletePost) {
      res.status(404).send({ message: "No post found with the provided ID" });
      return;
    }
    res.send(deletePost);
  } catch (error) {
    next(error);
  }
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
  try {
    const posts = await PostModel.deleteMany({});
    if (!posts) {
      res.status(404).send({ message: "No posts found to delete" });
    }
    res.json({ posts });
  } catch (error) {
    next(error);
  }
};
