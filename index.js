import express from 'express';
import router from './routes.js';
import  cors from 'cors';
import dbConnection from './db.js';
const app=express();
app.use(cors());
app.use('/',router);
const PORT=8000;

dbConnection();

app.listen(PORT, ()=> console.log(`running on ${PORT}`));
