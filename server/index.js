import express from 'express';
import Connection from './database/db.js';

const app =  express();
const PORT = 9000;



Connection();

app.listen(PORT, () => {
    console.log("server is running on:", PORT)
})