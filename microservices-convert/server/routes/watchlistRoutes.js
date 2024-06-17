const express = require('express');
const router = express.Router();
const watchlist_card = require('./db/watchlist_card.csv');


// GET all cards: watchlist/cards/
router.get('/cards', async (req, res, next) => {
    try {
        const allCards = await pool.query('SELECT * FROM watchlist_card;'); // SELECT ALL FROM TABLE TODO

        // TEMPORARY dummy data
        return res.status(200).json(watchlist_card);
        // // ElephantSQL
        // return res.status(200).json(allCards.rows); // aka sending back on the response object
    } catch(error) {
        console.error("watchlistCrudController.ts getAllCards: ", error);
        return next(error);
    }
})

// GET one card: watchlist/cards/:id
router.get('/cards/:id', async (req, res, next) => {
    try {
        const { id } = req.body; 
        const oneCard = await pool.query('SELECT * FROM watchlist_card WHERE _id = $1;', [id]);
        return res.status(200).json(oneCard.rows);
    } catch (error) {
        console.error("watchlistCrudController.ts getCard: ", error);
        return next(error);
    }
})

// POST: watch/card/post When you press the 'Add' button in the cryptodo page, it sends a POST request here
router.post('/cards', async (req, res, next) => {
    try {
        const { id } = req.body;
        const card = await pool.query('INSERT INTO watchlist_card SELECT * FROM ');
        return res.status(201).json(card);
    } catch(error) {
        console.error("watchlistCrudController.ts getCard: ", error);
        return next(error)
    }
})

// DELETE: watch/card/:id

// UPDATE aka PATCH: watch/card/:id

module.exports = router;