import express from 'express';
import cors from 'cors';

import { gameRouter } from './routes';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', gameRouter);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
