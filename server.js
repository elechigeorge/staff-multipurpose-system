require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');


// init server
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


// listen to server call 
server
    .listen(process.env.PORT, () => console.log("Services running on port" + process.env.PORT));