// only way to get data from client side is by accessing req.body

// TO START DATABASE
/*
psql r
\c trendingcoins_practice

to see the database in trendingcoins_practice: \dt
SELECT * FROM cryptoToDo;
*/

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



    // "start": "webpack-dev-server --mode development --open --hot --history-api-fallback",
