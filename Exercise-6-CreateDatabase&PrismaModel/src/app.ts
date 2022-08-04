import express from 'express';
import 'express-async-errors';

import prisma from "./lib/prisma/client";

import {
    validate,
    ValidationErrorMiddleware,
    userSchema,
    UserData
} from "./lib/validation";

const app = express();

app.use(express.json());

app.get("/users/:id(\\d+)", async (request, response,next) => {
    const userId = Number(request.params.id);

    const user = await prisma.user.findUnique({
        where: {id: userId}
    });

    if(!user){
        response.status(404);
        return next(`Cannot GET /planets/${userId}`)
    };

    response.json(user);
});

app.get('/users', async(request,response) => {
    const users = await prisma.user.findMany();

    response.json(users);
})

app.post("/users", validate({body: userSchema}), async(request,response) => {
    const userData: UserData = request.body;

    const user = await prisma.user.create({
        data: userData
    })

    response.status(201).json(user);
});


app.put("/users/:id(\\d+)", validate({body: userSchema}), async(request,response,next) => {
    const userId = Number(request.params.id)
    const userData: UserData = request.body;

    try{
        const user = await prisma.user.update({
            where: {id: userId},
            data: userData
        })

        response.status(200).json(user);
    }catch(error){
        response.status(404);
        next(`Cannot PUT /users/${userId}`)
    }
});


app.delete("/users/:id(\\d+)", async(request,response,next) => {
    const userId = Number(request.params.id);

    try{
        await prisma.user.delete({
            where: {id: userId}
        });

        response.status(204).end();
    }catch(error){
        response.status(404);
        next(`Cannot DELETE /users/${userId}`)
    }

});

app.use(ValidationErrorMiddleware);

export default app;
