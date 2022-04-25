import { Router } from 'express';

import { deleteUserById, getAllUsers, registerUser } from '../../controllers/api/users';

const router = Router();

router.get("/all", getAllUsers);

router.post("/", registerUser);

router.delete("/:id", deleteUserById);

export default router;
