const express = require('express');
const app = express();
const PORT = 5000;

const cors = require('cors');
const axios = require('axios');
const path = require('path');
const pool = require('./db.js'); // connect server to database aka connecting to the db.js file
const Twit = require('twit');

// ROUTERS
const cryptToDoRouter = require('./routes/cryptTodoRoutes.js');

// MIDDLEWARE
app.use(cors()); 
app.use(express.json()); // this gives us access to req.body and then we can get json data
// by using express.json, we can access the req.body

// CRUD ROUTES (get, post, delete, update/patch)
app.use('/v1/api/cryptodo/', cryptToDoRouter);









app.get('/cryptotodo', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../client/dist/index.html'));
})


app.get('/trending', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../client/dist/index.html')); // how I fixed getting the trending page when I manually type in localhost:8080/trending and press enter 
})

app.get('/', (req, res) => {
    return res.status(400).sendFile(path.resolve(__dirname, '../client/dist/index.html')); // how I fixed getting the trending page when I manually type in localhost:8080/trending and press enter 
})

// 404 handler to your server such that if a request comes in to *ANY* route not listed above the 404 page is sent
app.all('*', function(req, res) {
    return res.status(200).sendFile(path.resolve(__dirname, '../currentproject/client/src/index.html'));
});

/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log("Express error handler" , errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})