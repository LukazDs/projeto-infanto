import { Router } from 'express';
import * as personageController from '../controllers/personageController.js';
import * as validatePersonage from '../middleware/validatePersonage.js';

const personageRouter = Router();

personageRouter.post(
  '/user/:userId/personage/insert',
  validatePersonage.validateRegister,
  personageController.insertPersonage,
);

export default personageRouter;
