import { Router } from 'express';
import * as itemController from '../controllers/itemController.js';
import * as validateItem from '../middleware/validateItem.js';

const itemRouter = Router();

itemRouter.post(
  '/personage/:personageId/item',
  validateItem.validateRegister,
  itemController.insertItem,
);

export default itemRouter;
