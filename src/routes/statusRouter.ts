import { Router } from 'express';
import * as statusController from '../controllers/statusController.js';
import checkToken from '../middleware/validateToken.js';

const statusRouter = Router();

statusRouter.get(
  '/status/personage/:personageId',
  checkToken,
  statusController.getStatus,
);

export default statusRouter;
