import { Router } from 'express'

import tasks from './tasks'
import week from './week'

const router = Router();

// Add TASKS Routes
router.use(tasks);

// Add WEEK Routes
router.use(week);

export default router;