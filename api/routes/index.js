import { Router } from 'express'

import cases from './case'
import openSource from './openSource'

const router = Router();

// Add Cases Routes
router.use(cases);

// Add OpenSource Routes
router.use(openSource);

export default router;