const express = require('express');
import { Request, Response, NextFunction } from 'express';
const router = express.Router();
const { githubLoginController, githubCallbackController, githubSuccessController } = require('../controllers/loginFlowController');
const { registerController,  loginController } = require('../controllers/authController');

router.post('/login', loginController)

router.get('/github-login', githubLoginController);

router.get('/callback', githubCallbackController); // from frontend sign in

router.post('/register', registerController );

router.get('github-success', githubSuccessController)

module.exports = router;
