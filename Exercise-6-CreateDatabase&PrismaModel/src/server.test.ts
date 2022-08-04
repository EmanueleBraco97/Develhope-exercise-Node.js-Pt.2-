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
});

describe("GET /user/:id", () => {
    test("Valid request", async () => {
        const user = {
            id: 1,
            name: "emanuele",
            surname: 'braco',
            role: 'student'
        };

        //@ts-ignore
        prismaMock.user.findUnique.mockResolvedValue(user);

        const response = await request
            .get("/users/1")
            .expect(200)
            .expect("Content-Type", /application\/json/);

        expect(response.body).toEqual(user);
    });

    // test("User does not exist", async () => {
    //     //@ts-ignore
    //     prismaMock.user.findUnique.mockResolvedValue(null);

    //     const response = await request
    //         .get("/users/23")
    //         .expect(404)
    //         .expect("Content-Type", /text\/html/);

    //     expect(response.text).toContain("Cannot GET /users/23");
    // });


    test("Invalid user ID", async () => {
        const response = await request
            .get("/users/abcd")
            .expect(404)
            .expect("Content-Type", /text\/html/);

        expect(response.text).toContain("Cannot GET /users/abcd");
    });

});




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





