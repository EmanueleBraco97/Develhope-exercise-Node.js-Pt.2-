const {application} = require('express');
const server = require('./server.js');
const supertest = require('supertest');
const app = require('./server.js');
const request = supertest(app); //collega ogni test ai server//


test('GET /', async () => {
    const response = await request
    .get('/')
    .expect(200)
    .expect('Content-Type', /application\/json/)

    expect(response.body).toEqual({nome: 'emanuele', cognome: 'braco'})

})