const expressWatchlist = require('express');
const watchlistRouter = expressWatchlist.Router();

// CONTROLLERS
const { addCard, getAllCards, getCard, deleteCard, putCard } = require('../controllers/watchListCrudController');

// GET all cards: watchlist/cards/
watchlistRouter.get('/cards', getAllCards); 

// GET one card: watchlist/cards/:id
watchlistRouter.get('/cards/:id', getCard);

// POST: watch/card/post
    // When you press the 'Add' button in the cryptodo page, it sends a POST request here
watchlistRouter.post('/cards', addCard);


// DELETE: watch/card/:id
watchlistRouter.delete('/cards/:id', deleteCard);


// UPDATE aka PATCH: watch/card/:id
watchlistRouter.put('/cards/:id', putCard);


module.exports = watchlistRouter;

