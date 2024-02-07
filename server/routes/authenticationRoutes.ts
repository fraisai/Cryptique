import express from 'express';
const router = express.Router();

import { registerController, registerUser, login } from '../controllers/registerController';
import { githubLoginController } from '../controllers/loginFlowController';

router.get('/auth/register', registerUser);
router.post('/auth/register', registerController);
router.post('/auth/login', login);

export default router;
