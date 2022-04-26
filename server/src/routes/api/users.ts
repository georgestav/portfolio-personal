import { Router } from 'express';

import { deleteAllUsers, deleteUserById, getAllUsers, registerUser, updateUserId } from '../../controllers/api/users';

const router = Router();

router.get("/all", getAllUsers);

router.delete("/all", deleteAllUsers);

router.post("/", registerUser);

router.patch("/:id", updateUserId);

router.delete("/:id", deleteUserById);

export default router;
