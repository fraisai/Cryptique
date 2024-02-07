const express = require('express');
const router = express.Router();
const { githubLoginController, githubCallbackController } = require('../controllers/loginFlowController');

router.get('/github-login', githubLoginController);
router.get('/callback/', githubCallbackController)

module.exports = router;
