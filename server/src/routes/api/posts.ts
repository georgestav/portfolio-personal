import { Router } from 'express';

import {
    createPost,
    deleteAllPosts,
    deletePostId,
    getPosts,
    getPostsByAuthor,
    getPublishedPosts,
    updatePostId,
} from '../../controllers/api/posts';

const router = Router();

router.post("/", createPost);

router.get("/all", getPosts);

router.get("/published", getPublishedPosts);

router.get("/:author/:published?", getPostsByAuthor);

router.patch("/:id", updatePostId);

router.delete("/all", deleteAllPosts);

router.delete("/:id", deletePostId);

export default router;
