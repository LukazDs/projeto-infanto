import { Router } from 'express';
import * as personageController from '../controllers/personageController.js';
import * as validatePersonage from '../middleware/validatePersonage.js';
import checkToken from '../middleware/validateToken.js';

const personageRouter = Router();

personageRouter.get(
  '/user/personages',
  checkToken,
  personageController.getPersonagesByUserId,
);

personageRouter.get(
  '/master/personages',
  checkToken,
  personageController.getPersonages,
);

personageRouter.post(
  '/user/personage',
  checkToken,
  validatePersonage.validateRegister,
  personageController.insertPersonage,
);

personageRouter.delete(
  '/user/personage/:personageId',
  checkToken,
  personageController.deletePersonage,
);

export default personageRouter;
