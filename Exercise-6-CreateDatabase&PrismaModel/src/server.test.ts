import supertest from 'supertest';

import {prismaMock} from "./lib/prisma/client.mock";

import app from './app';

const request = supertest(app);

describe("GET /users", () => {
    test('Valid request', async ()=> {
        const users =
            {
                id: 1,
                name:'emanuele',
                surname:'braco',
                role: 'student'
            }

        //@ts-ignore
        prismaMock.user.findMany.mockResolvedValue(users);

        const response = await request
            .get('/users')
            .expect(200)
            .expect('Content-Type', /application\/json/)

        expect(response.body).toEqual(users);
    });
})



describe("POST /users", () => {
    test('Valid request', async ()=> {
        const user =
            {
                name:'emanuele',
                surname:'braco',
                role: 'student'
            }

        const response = await request
            .post('/users')
            .send(user)
            .expect(201)
            .expect('Content-Type', /application\/json/)

        expect(response.body).toEqual(user);
    });

    test('Invalid request', async ()=> {
        const user =
            {
                surname:'braco',
                role: 'student'
            }

        const response = await request
            .post('/users')
            .send(user)
            .expect(422)
            .expect('Content-Type', /application\/json/)

        expect(response.body).toEqual({
            errors: {
                body: expect.any(Array)
            }
        });
    });
});





