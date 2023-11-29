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


// Twitter Route
app.post('/twitter/:id', async (req, res) => {
    const T = new Twit(
        {
            consumer_key: process.env.CONSUMER_KEY,
            consumer_secret: process.env.CONSUMER_SECRET,
            access_token: process.env.ACCESS_TOKEN,
            access_token_secret: process.env.ACCESS_TOKEN_SECRET
        }
    )
    
    try {
        const term = req.params.id;

        T.get('search/tweets', { q: `${term} since:2022-06-08`, tweet_mode:'extended',count: 10 }, function(err, data, response) {
            res.status(200).send(data.statuses);
        })
    } catch (error) {
        console.error("Error in server: POST req for /twitter/term", err.message)
    }

})



// **************** CRUD ROUTES ******************
app.use('/v1/api/cryptodo/', cryptToDoRouter);


// 2. GET: get all previous todos data and render it in ListTodos.js
app.get('/cryptotodo2', async (req, res) => {
    try {
        // you are selecting all the data from the table 'todo' located inside of the database you initially created called 'perntodo'
        const allTodos = await pool.query('SELECT * FROM cryptoToDo'); // SELECT ALL FROM TABLE TODO

        res.status(200).json(allTodos.rows); // aka sending back on the response object
        // USE postman: localhost:5000/todos and send a get request to see the list of all the todo items
    } catch(err) {
        console.error(err.message);
    }
})


// 5. Delete a todo
app.delete('/cryptotodo/:id', async (req, res) => {
    try {
        // specify exactly what we want to delete
        const id = req.params.id;

        const deleteTodo = await pool.query('DELETE FROM cryptoToDo WHERE trending_id = $1', [id]);
        res.status(200).json('To do item was deleted');
    } catch (error) {
        console.log("error in DELETE request in server", error.message);
    }

})
// ***********************  END OF CRUD ROUTES **********


// ROUTES

app.get('/trending2', async (req, res) => {
    const trendingLink = 'https://api.coingecko.com/api/v3/search/trending';
    await axios
        .get(trendingLink)
        .then(response => {
            // setCoins(res.data);
            const { coinsArr } = response.data.coins;
            res.status(200).send(response.data.coins)
        })
        .catch((error) => {
            console.log(error);
        })
        res.end()
});

app.get('/home', async (req, res) => {
    const coinGeckoUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';

    try {
        const response = await axios.get(coinGeckoUrl);
        res.status(200).send(response.data)
    } catch (error) {
        console.log("get request for '/' in server", error.message);
    }
    res.end()
})









// in server.js

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