const express = require('express');
import { Request, Response, NextFunction } from 'express';
const router = express.Router();
const { githubLoginController, githubCallbackController } = require('../controllers/loginFlowController');
const { registerController,  loginController } = require('../controllers/authController');

router.post('/login', loginController)

router.get('/github-login', githubLoginController);

router.get('/callback', githubCallbackController);

router.post('/register', registerController );


module.exports = router;
