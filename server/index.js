// TO START DATABASE
/*
psql r
\c trendingcoins_practice

to see the database in trendingcoins_practice: \dt
SELECT * FROM cryptoToDo;
*/

const express = require('express');
const app = express();
const PORT = 5000;

const cors = require('cors');
const axios = require('axios');
const path = require('path');
const crudController = require('./controllers/crudController');
const pool = require('./db.js'); // connect server to database aka connecting to the db.js file
const Twit = require('twit');

// const twitController = require('./tweetSearch');
// const cryptoTodoRouter = require('./cryptoTodoRoute');
// app.use('/cryptotodo', cryptoTodoRouter);

// MIDDLEWARE
app.use(cors());
// only way to get data from client side is by accessing req.body
app.use(express.json()); // this gives us access to req.body and then we can get json data
// by using express.json, we can access the req.body

// Twitter Route
app.post('/twitter/:id', async (req, res) => {
    const T = new Twit(
        {
            // consumer_key: 'qPHlIQJDHzVh9ik3H0kPu2Ds3',
            consumer_key: process.env.CONSUMER_KEY,
            consumer_secret: 'P7A3JH3yBFHDa4iHCsYunLUPB8gBHt97TI2LtWNHdZN3RuzZlc',
            access_token: '1453926189953953794-sEE9AFyNIPDeR0KhRfiLQTu2z3KrXP',
            access_token_secret: 'IUgkm4WmeWPiiN3Tkd7Jk834ykm4uO3uopEcrD3shjfC6'
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

// POST When you press the 'Add' button in the cryptodo page, it sends a POST request here
app.post('/cryptotodo', async(req,res) => {
    try {
        const name = req.body.name;
        // console.log(req.body, "name: ", name)

        // you are inserting into the column for description in the table named 'todo' (located in the database 'perntodo') the object description (from req.body)
        const newTodo = await pool.query(`INSERT INTO cryptoToDo(name) VALUES($1) RETURNING *`, [name]);

        res.status(200).json(newTodo)
        // Essentially what happens:
            /* when you go on website: localhost:5000/todos and post:
                {
                    "description": "BTC"
                }
                you update the database by inserting into database the description in pool.query()*/
    } catch(err) {
        console.error("Error in server: POST req for /cryptotodo", err.message)
    }
})

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

// NOTES 
// for get requests:     
    // USE postman: localhost:PORT/todos and send a get request to see the list of all the todo items
// POST
// req = request from trending coins page
// res = the response server will send back to the trending coins page (client)
// app.post('/trending', async (req, res) => {
//     try {
//         res.send('post on trending')
//     } catch(err) {
//         console.error(err.message);
//     }
// })

/*
database.sql created a database called 'trendingcoins_practice'
then it created a table called 'top7coins' in database 'trendingcoins_practice' with the following columns:
    trending_id SERIAL PRIMARY KEY,
    coin_name, = response.data.coins
    symbol,
    market_cap_rank,
    large,
    price_btc
*/

            /*
            response.data.coins[0].item = {
                "id": "optimism",
                "coin_id": 25244,
                "name": "Optimism",
                "symbol": "OP",
                "market_cap_rank": 158,
                "thumb": "https://assets.coingecko.com/coins/images/25244/thumb/OP.jpeg?1651026279",
                "small": "https://assets.coingecko.com/coins/images/25244/small/OP.jpeg?1651026279",
                "large": "https://assets.coingecko.com/coins/images/25244/large/OP.jpeg?1651026279",
                "slug": "optimism",
                "price_btc": 0.000040525752580960674,
                "score": 0
            };
            */