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



app.get('/trending2', async (req, res) => {
    const trendingLink = 'https://api.coingecko.com/api/v3/search/trending';
    await axios
        .get(trendingLink)
        .then(response => {
            console.log('response', response)
            // setCoins(res.data);
            const { coinsArr } = response.data.coins;
            res.status(200).send(response.data.coins)
        })
        .catch((error) => {
            console.log(error);
        })
        res.end()
});

app.get('/home55', async (req, res) => {
    const coinGeckoUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';

    try {
        const response = await axios.get(coinGeckoUrl);
        console.log("home:", response)
        res.status(200).send(response.data)
    } catch (error) {
        console.log("get request for '/' in server", error.message);
    }
    res.end()
})
















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