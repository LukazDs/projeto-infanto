import express, { json } from 'express';
import cors from 'cors';
import 'express-async-errors';

const app = express();
app.use(json(), cors());

export default app;
