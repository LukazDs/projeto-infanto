import chalk from 'chalk';
import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT: number = Number(process.env.PORT);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${chalk.green(PORT)}`);
});
