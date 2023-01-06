import { Router } from 'express';
import * as authController from '../controllers/authController.js';

const authRouter = Router();

authRouter.post('/user/login', () => {
  console.log('You are in LoginRoute');
});

authRouter.post('/user/sign-up', authController.insertUser);

export default authRouter;
