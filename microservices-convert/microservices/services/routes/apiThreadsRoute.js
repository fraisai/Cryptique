const express = require('express');
const router = express.Router();
const db = require('./db.json');

router.get('/', async (req, res, next) => {
    return res.status(200).send(db.threads);
});

router.get('/:threadId', async (req, res, next) => {
    const id = parseInt(req.params.threadId);
    return res.status(200).send(db.threads.find((thread) => thread.id == id));
})


module.exports = router;