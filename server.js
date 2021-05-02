
import dotenv from 'dotenv';

import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import Members from './routes/Members.js'


// init server
dotenv.config();
const server = express();


// initialize middlewares
server.use(cors())
server.use(express.urlencoded({ extended: true }))
server.use(express.json())


// connect to Database with mongoose 
mongoose
    .connect(process.env.MongoURI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connection established..."))
    .catch(error => console.error(error.message))



// routes 
server.use('/accounts', Members);


const PORT = process.env.PORT || 5000

// listen to server call 
server
    .listen(PORT, () => console.log("Services running on port" + " " + PORT));