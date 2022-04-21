import { Router } from 'express';

import { getAllUsers } from '../../controllers/api/users';

const router = Router();

router.get("/all", getAllUsers);

export default router;
