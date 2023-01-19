import express, { json } from 'express';
import cors from 'cors';
import 'express-async-errors';
import authRouter from './routes/authRouter.js';
import personageRouter from './routes/personageRouter.js';
import skillRouter from './routes/skillRouter.js';
import errorHandler from './middleware/errorHandle.js';
import itemRouter from './routes/itemRouter.js';
import statusRouter from './routes/statusRouter.js';

const app = express();
app.use(json(), cors());

//routes

app.use(authRouter);
app.use(personageRouter);
app.use(skillRouter);
app.use(itemRouter);
app.use(statusRouter);

app.use(errorHandler);

export default app;
