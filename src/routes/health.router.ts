import { Router } from 'express';

import HealthController from '../controllers/health.controller';

const router = Router();
const healthController = new HealthController();

/**
 * @openapi
 * /api/health:
 *  get:
 *     tags:
 *     - API Health
 *     description: Should always respond with status 200.
 *     responses:
 *       200:
 *         description: App is up and running.
 */
router.get('/', healthController.checkHealth);

export default router;
