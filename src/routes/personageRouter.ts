import { Router } from 'express';
import * as personageController from '../controllers/personageController.js';
import * as validatePersonage from '../middleware/validatePersonage.js';
import checkToken from '../middleware/validateToken.js';

const personageRouter = Router();

personageRouter.get(
  '/user/:userId/personages',
  checkToken,
  personageController.getPersonagesByUserId,
);

personageRouter.post(
  '/user/:userId/personage',
  checkToken,
  validatePersonage.validateRegister,
  personageController.insertPersonage,
);

export default personageRouter;
