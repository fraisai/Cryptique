"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const { githubLoginController, githubCallbackController } = require('../controllers/loginFlowController');
const { registerController, loginController } = require('../controllers/authController');
router.post('/login', loginController);
router.get('/github-login', githubLoginController);
router.get('/callback', githubCallbackController);
router.post('/register', registerController);
module.exports = router;
//# sourceMappingURL=authRoutes.js.map