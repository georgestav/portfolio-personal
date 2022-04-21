import { Router } from 'express';

import {
    createPost,
    deleteAllPosts,
    deletePostId,
    getPosts,
    getPublishedPosts,
    updatePostId,
} from '../../controllers/api/posts';

const router = Router();

router.post("/", createPost);

router.get("/all", getPosts);

router.get("/published", getPublishedPosts);

router.patch("/:id", updatePostId);

router.delete("/all", deleteAllPosts);

router.delete("/:id", deletePostId);

export default router;
