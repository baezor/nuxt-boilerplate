import { Router } from 'express'

import item from './item'

const router = Router();

// Add Items Routes
router.use(item);

export default router;