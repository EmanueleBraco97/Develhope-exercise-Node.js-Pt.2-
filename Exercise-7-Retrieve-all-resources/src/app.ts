import express from 'express';
import 'express-async-errors';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const app = express();

app.get('/users', async (request,response) => {
    const users = await prisma.user.findMany();

    response.json(users)
})

export default app;
