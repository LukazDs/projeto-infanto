import { Router } from 'express';
import * as itemController from '../controllers/itemController.js';

const itemRouter = Router();

itemRouter.post('/personage/:personageId/item', itemController.insertItem);

export default itemRouter;
