import express, { json } from 'express';
import cors from 'cors';
import 'express-async-errors';
import authRouter from './routes/authRouter.js';
import errorHandler from './middleware/errorHandle.js';

const app = express();
app.use(json(), cors());

//routes

app.use(authRouter);
app.use(errorHandler);

export default app;
