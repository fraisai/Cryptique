import express, { Request, Response, NextFunction } from "express";
import axios from 'axios';
const dotenv = require('dotenv');
dotenv.config();
const github_url: string = '' + process.env.GITHUB_OAUTH_LOGIN_URL;

/**
 * github oauth 2.0 - sends the redirect URL to frontend for user to be redirected to github.com to login and authorize cryptique
 */
export const githubLoginController = async (req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | void>  => { //auth/github-login
    const payload = {
        status: 'success',
        redirect: github_url
    }
    try {
        return res.status(200).json(payload); // send the redirect URL (ex: https://github.com/login/oauth/authorize?client_id=xxxxx&state=abcdefg) to frontend that will send user to Github to finish authorizing app 
    } catch (error) {
        console.log('Error in loginFlowController.ts: githubLoginController', error);
        // res.status(200).redirect('back'); // in Express 4.x, use 'back' to automatically redirect back to the page the request came from
        return next(error);
    }
}

/**
 * After user logs in to github and authorizes cryptique, then github redirects user back to callback url you specified with the access code as a query parameter (ex: http://localhost:<SERVER_PORT>/auth/callback?code=XXXXXXX)
 */
export const githubCallbackController = async (req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | void> => { // auth/callback
    const { code } = req.query; // access code that will be exchanged for access token

    try {
        // exchange authorization code with access token
        const tokenResponse = await axios.post('https://github.com/login/oauth/access_token', {
            client_id: process.env.GITHUB_OAUTH_CLIENT_ID,
            client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET, 
            code: code,
            // redirect_uri: "http://localhost:8080/dashboard"
        }, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        });
        const tokenData = await tokenResponse.data;
        const { access_token } = tokenData;
        console.log('githubCallbackController, tokenData, access_token:', tokenData, access_token);

        // if (access_token) return res.status(200).json({ status: 'success'});
        if (access_token) return res.status(307).redirect('http://localhost:8080/dashboard');

        else return res.status(200).json({ status: 'fail' });
    } catch (error) {
        console.log('Error in githubCallbackController.ts', error);
        return next(error);
    }
}

export const githubSuccessController = async (req: Request, res: Response, next: NextFunction) => {
    return res.json({ status: 'success'});
}