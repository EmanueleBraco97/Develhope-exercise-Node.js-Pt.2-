import express from 'express';
import 'express-async-errors';
import { initCorsMiddleware } from './lib/middleware/cors';

import { ValidationErrorMiddleware } from './lib/middleware/validation';

import usersRoutes from './routes/users';

const app = express();

app.use(express.json());

app.use(initCorsMiddleware());

app.use("/users", usersRoutes);

app.use(ValidationErrorMiddleware);

export default app;
