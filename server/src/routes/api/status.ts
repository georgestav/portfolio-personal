import { Router } from 'express';

import { getStatus } from '../../controllers/api/api';

const router = Router();

router.get("/", getStatus);

export default router;
