import express from 'express';
import 'express-async-errors';

import prisma from "./lib/prisma/client";

const app = express();

app.get('/users', async(request,response) => {
    const users = await prisma.user.findMany();

    response.json(users);
})

export default app;
