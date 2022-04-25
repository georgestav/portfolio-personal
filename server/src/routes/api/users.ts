import { Router } from 'express';

import { getAllUsers, registerUser } from '../../controllers/api/users';

const router = Router();

router.get("/all", getAllUsers);

router.post("/", registerUser);

export default router;
