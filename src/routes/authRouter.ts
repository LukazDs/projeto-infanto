import { Router } from 'express';
import * as authController from '../controllers/authController.js';
import * as validateUser from '../middleware/validateUser.js';

const authRouter = Router();

authRouter.post('/user/login', () => {
  console.log('You are in LoginRoute');
});

authRouter.post(
  '/user/sign-up',
  validateUser.validateRegister,
  authController.insertUser,
);

export default authRouter;
