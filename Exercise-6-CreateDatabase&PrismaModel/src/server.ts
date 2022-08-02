import 'dotenv/config';

import app from './app'

process.env.PORT;

app.listen(process.env.PORT, () => {
    console.log(`[Server]: Server is running at http://localhost:${process.env.PORT}`)
})
