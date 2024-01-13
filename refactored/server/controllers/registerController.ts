import { Request, Response } from 'express';
import { random, authentication } from '../helpers/crypto';
import { getUserByEmail, createUser } from '../models/usersModel';
const CRYPTO_SECRET = 'RAY-REST-API';
// type AuthControllerType = {
//     register: (req: Request, res: Response) => Response
// }

export const registerUser = async (req: Request, res: Response) => {
  return res.json('Checking /auth/register');
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.sendStatus(400);

    const user = await getUserByEmail(email).select('+authentication.salt +authentication.password');

    if (!user) res.sendStatus(400);

    const expectedHash = authentication(user.authentication.salt, password);

    if (user.authentication.password !== expectedHash) return res.sendStatus(403);

    const salt = random();
    user.authentication.sessionToken = authentication(salt, user._id.toString());

    await user.save();

    res.cookie(CRYPTO_SECRET, user.authentication.sessionToken, { domain: 'localhost', path: '/' });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log('authController.login Error: ', error);
    return res.sendStatus(400);
  }
};

export const registerController = async (req: Request, res: Response) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.sendStatus(400);
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.sendStatus(400);
    }

    const salt = random();
    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log('authController Error: ', error);
    return res.sendStatus(400);
  }
};
