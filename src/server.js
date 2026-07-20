import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import { connectMongoDB } from './db/connectMongoDB.js';
import notesRoutes from './routes/notesRoutes.js';

import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import helmet from 'helmet';
import { errors } from 'celebrate';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: 'GET,PATCH,POST,DELETE',
  }),
);
app.use(helmet());
app.use(logger);

app.use(notesRoutes);

app.use(notFoundHandler);

app.use(errors());

app.use(errorHandler);

const PORT = process.env.PORT ?? 3000;

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
