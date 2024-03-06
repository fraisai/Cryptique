"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWatchlistMetaCards = exports.putCard = exports.deleteCard = exports.addCard = exports.getCard = exports.getAllCards = void 0;
const pool = require('../models/sqlModel'); // connect server to database aka connecting to the db.js file
const watchlist_card = require('../data/watchlist_card.csv');
/**
 * Get all watchlist cards
 */
const getAllCards = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allCards = yield pool.query('SELECT * FROM watchlist_card;'); // SELECT ALL FROM TABLE TODO
        // TEMPORARY dummy data
        return res.status(200).json(watchlist_card);
        // ElephantSQL
        return res.status(200).json(allCards.rows); // aka sending back on the response object
    }
    catch (error) {
        console.error("watchlistCrudController.ts getAllCards: ", error);
        return next(error);
    }
});
exports.getAllCards = getAllCards;
/**
 * Get a single card from watchlist
 */
const getCard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const oneCard = yield pool.query('SELECT * FROM watchlist_card WHERE _id = $1;', [id]);
        // TEMPORARY DUMMY DATA
        // ElephantSQL
        return res.status(200).json(oneCard.rows);
    }
    catch (error) {
        console.error("watchlistCrudController.ts getCard: ", error);
        return next(error);
    }
});
exports.getCard = getCard;
// Add a card to watchlist
const addCard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body; // you are inserting into the column for description in the table named 'todo' (located in the database 'perntodo') the object description (from req.body)
        // const newCard = await pool.query(`INSERT INTO watchlist_card(_id, _name, symbol, percent_change, equity, shares, price) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [name]);
        const card = yield pool.query('INSERT INTO watchlist_card SELECT * FROM ');
        // ElephantSQL
        // res.status(200).json(newCard);
        return next();
    }
    catch (error) {
        console.error("watchlistCrudController.ts getCard: ", error);
        return next(error);
    }
});
exports.addCard = addCard;
// Delete a card from watch list
const deleteCard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params; // specify exactly what we want to delete
        // ElephantSQL
        const deletedCard = yield pool.query('DELETE FROM watchlist_card WHERE _id = $1 RETURN *;', [id]);
        return res.status(200).json(deletedCard.rows);
    }
    catch (error) {
        console.log("Error in DELETE request in server", error.message);
        return next(error);
    }
});
exports.deleteCard = deleteCard;
// Edit a card in watch list
const putCard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const coin_id = req.params.id;
        const { shares, value } = req.body;
        if (!shares || !value)
            return res.status(400).json({ error: 'Put request requires both shares & value.' });
        const updateTodo = yield pool.query(`UPDATE watchlist_card SET shares=$1 WHERE _id=$2 RETURNING * WHERE _id=$3;`, [shares, coin_id, coin_id]);
        return res.status(204).json('Item was edited.');
    }
    catch (error) {
        console.log("Error in putCard request in server", error.message);
        return next(error);
    }
});
exports.putCard = putCard;
// Left join the cards in watchlist with their corresponding rows in meta table (adds [null] for meta table data if join conditions are not equal)
const getWatchlistMetaCards = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sql = `SELECT watchlist_card.*, meta.desc, meta.homepage_url, meta.img, meta.jsonb_meta
        FROM watchlist_card LEFT JOIN meta
        ON watchlist_card = meta.id;`;
        const joinWatchlistMetaCards = yield pool.query(sql);
        return res.status(200).json(joinWatchlistMetaCards.rows);
    }
    catch (error) {
        console.log("Error in watchlistCrudController.ts - joinWatchlistMetaCards", error.message);
        return next(error);
    }
});
exports.getWatchlistMetaCards = getWatchlistMetaCards;
//# sourceMappingURL=watchlistCrudController.js.map