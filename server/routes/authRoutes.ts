const express = require('express');
const router = express.Router();
const { githubLoginController, githubCallbackController } = require('../controllers/loginFlowController');
const { registerController, loginController } = require('../controllers/authController');

router.get('/github-login', githubLoginController);

router.get('/callback/', githubCallbackController);

router.post('/register', registerController );

router.post('/login,', loginController);

module.exports = router;
