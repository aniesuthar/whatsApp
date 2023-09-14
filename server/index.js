import express from 'express';
import cors from 'cors';

import Connection from './database/db.js';
import Routes from './routes/route.js'


const app =  express();
const PORT = 9000;


app.use(cors());
app.use('/', Routes);



Connection();

app.listen(PORT, () => {
    console.log("server is running on:", PORT)
})