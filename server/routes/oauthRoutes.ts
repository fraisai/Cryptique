const express = require('express');
const router = express.Router();
const { githubLoginController, githubCallbackController } = require('../controllers/loginFlowController.ts');

router.get('/github-login', githubLoginController);
router.get('/callback/', githubCallbackController)

module.exports = router;
