import express, { json } from 'express';
import cors from 'cors';
import 'express-async-errors';
import authRouter from './routes/authRouter.js';

const app = express();
app.use(json(), cors());

//routes

app.use(authRouter);

export default app;
