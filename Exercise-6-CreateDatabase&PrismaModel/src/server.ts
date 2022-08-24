import 'dotenv/config';

import config from './config';

import app from './app'

config.PORT;

app.listen(process.env.PORT, () => {
    console.log(`[Server]: Server is running at http://localhost:${process.env.PORT}`)
})
