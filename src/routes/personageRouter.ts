import { Router } from 'express';
import * as personageController from '../controllers/personageController.js';

const personageRouter = Router();

personageRouter.post(
  '/user/:userId/personage/insert',
  personageController.insertPersonage,
);

export default personageRouter;
