import express from 'express';
import 'express-async-errors';

const app = express();

app.get('/users', (request,response) => {
    response.json({name: 'emanuele'})
})

export default app;
