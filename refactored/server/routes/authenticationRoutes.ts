const express = require('express');
const router = express.Router();

import { registerController, registerUser, login } from '../controllers/registerController';

router.get('/auth/register', registerUser);
router.post('/auth/register', registerController);
router.post('/auth/login', login);

module.exports = router;
