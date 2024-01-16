const expressWatchlist = require('express');
const watchlistRouter = expressWatchlist.Router();

// CONTROLLERS
const { addCard, getCard, deleteCard, patchCard } = require('../controllers/watchListCrudController');

// GET: watch/card/
watchlistRouter.get('/get', addCard);


// POST: watch/card/post
    // When you press the 'Add' button in the cryptodo page, it sends a POST request here
watchlistRouter.post('/post', getCard); 


// DELETE: watch/card/:id
watchlistRouter.delete('/:id', deleteCard);


// UPDATE aka PATCH: watch/card/:id
watchlistRouter.patch('/:id', patchCard);


module.exports = watchlistRouter;

