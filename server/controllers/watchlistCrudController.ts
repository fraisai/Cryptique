// in Crypto Cards => Add to Watchlist => 
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
const pool = require('../models/sqlModel'); // connect server to database aka connecting to the db.js file
const watchlist_card = require('../data/watchlist_card.csv');

/**
 * Get all watchlist cards
 */
export const getAllCards = async(req: Request, res: Response, next: NextFunction): Promise<Response<string, any> | void> => { // GET: /watchlist/cards
    try {
        const allCards = await pool.query('SELECT * FROM watchlist_card;'); // SELECT ALL FROM TABLE TODO

        // TEMPORARY dummy data
        return res.status(200).json(watchlist_card);
        // ElephantSQL
        return res.status(200).json(allCards.rows); // aka sending back on the response object
    } catch(error: any | ErrorRequestHandler) {
        console.error("watchlistCrudController.ts getAllCards: ", error);
        return next(error);
    }
}

/**
 * Get a single card from watchlist
 */
export const getCard = async(req: Request, res: Response, next: NextFunction): Promise<Response<string, any> | void> => { // GET: /watchlist/cards/:id
    try {
        const { id } = req.body; 
        const oneCard = await pool.query('SELECT * FROM watchlist_card WHERE _id = $1', [id]);
        console.log('watchlistCrudController.ts getCard', oneCard);

        // ElephantSQL
        res.status(200).json(oneCard.rows);
        return next();
    } catch (error: any | ErrorRequestHandler) {
        console.error("watchlistCrudController.ts getCard: ", error);
        return next();
    }
}

// Add a card to watchlist
export const addCard = async(req: Request, res: Response, next: NextFunction) => { // POST: /watchlist/cards
    try {
        const { id } = req.body; // you are inserting into the column for description in the table named 'todo' (located in the database 'perntodo') the object description (from req.body)
        // const newCard = await pool.query(`INSERT INTO watchlist_card(_id, _name, symbol, percent_change, equity, shares, price) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [name]);

        const card = await pool.query('INSERT INTO watchlist_card SELECT * FROM ')

        // ElephantSQL
        // res.status(200).json(newCard);
        return next();
    } catch(error: any | ErrorRequestHandler) {
        console.error("watchlistCrudController.ts getCard: ", error);
        return next(`Error in watchListCrudController.js: addCrypto: ${error}`)
    }
}

// Delete a card from watch list
export const deleteCard = async(req: Request, res: Response, next: NextFunction) => { // DELETE /watchlist/cards/:id
    try {
        // specify exactly what we want to delete
        const { id } = req.params;

        // ElephantSQL
        const deleteTodo = await pool.query('DELETE FROM watchlist_card WHERE _id = $1', [id]);
        res.status(200).json('To do item was deleted');
        return next();
    } catch (error: any | ErrorRequestHandler) {
        console.log("Error in DELETE request in server", error.message);
        return next();
    }
}

// Edit a card in watch list
export const patchCard = async(req: Request, res: Response, next: NextFunction) => { // PATCH: /watchlist/cards/:id
    try {
        const { id } = req.params;
        const { name } = req.body;

        if (!name) return next();
        const updateTodo = await pool.query(`UPDATE watchlist_card SET name=$1 WHERE _id = $2;`, [name, id]);
        res.status(200).json('Item was edited.');
        return next();
    } catch (error: any | ErrorRequestHandler) {
        console.log("Error in EDIT request in server", error.message);
        return next();
    }
}

