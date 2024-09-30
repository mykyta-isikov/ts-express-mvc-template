import express from 'express';
import 'dotenv/config';

import healthRouter from './routes/health.router';

const app = express();

app.use(express.json());

app.use('/api/health', healthRouter);

export default app;
