const express = require('express');
const router = express.Router();
const { githubLoginController, githubCallbackController } = require('../controllers/loginFlowController.ts');
const { registerController } = require('../controllers/authController');

router.get('/github-login', githubLoginController);

router.get('/callback/', githubCallbackController);

router.post('/register', registerController );
module.exports = router;
