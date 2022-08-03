import supertest from 'supertest';

import {prismaMock} from "./lib/prisma/client.mock";

import app from './app';

const request = supertest(app);


test('GET /users', async ()=> {
    const users= [
        {
            id:1,
            name:'emanuele',
            surname:'braco',
            role: 'student'
        }
    ]

     //@ts-ignore
    prismaMock.user.findMany.mockResolvedValue(users);

    const response = await request
        .get('/users')
        .expect(200)
        .expect('Content-Type', /application\/json/)

    expect(response.body).toEqual(users);
})


