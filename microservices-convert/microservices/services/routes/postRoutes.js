const express = require('express');
const router = express.Router();
const db = require('./db.json');

router.get('/in-thread/:threadId', (req, res, next) => {
    const { threadId } = req.params;
    return res.status(200).send(db.posts.filter((post) => post.thread == threadId));
})

router.get('/by-user/:userId', (req, res, next) => {
    const id = parseInt(req.params.userId);
    return res.status(200).send(db.posts.filter((post) => post.user == id));
})

module.exports = router;