import { Router } from 'express';
import * as validateSkill from '../middleware/validateSkill.js';
import * as skillController from '../controllers/skillController.js';
import checkToken from '../middleware/validateToken.js';

const skillRouter = Router();

skillRouter.post(
  '/personage/:personageId/skill',
  checkToken,
  validateSkill.validateRegister,
  skillController.insertPointsSkill,
);

skillRouter.put(
  '/skill/:id',
  checkToken,
  validateSkill.validateRegister,
  skillController.updateSkill,
);

export default skillRouter;
