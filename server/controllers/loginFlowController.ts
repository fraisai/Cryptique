import express, { Request, Response, NextFunction } from "express";
import axios from 'axios';
const dotenv = require('dotenv');
dotenv.config();
const github_url: string = '' + process.env.GITHUB_OAUTH_LOGIN_URL;

/**
 * github oauth 2.0 - redirects user to github.com to log in
 */
export const githubLoginController = async (req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | void>  => {
    console.log('githubLoginController', github_url)
    try {
        res.redirect(github_url);
        return;
    } catch (error) {
        console.log('Error in loginFlowController.ts: githubLoginController', error);
        res.status(200).redirect('back'); // in Express 4.x, use 'back' to automatically redirect back to the page the request came from
        return next(error);
    }
}

/**
 * 
 */
export const githubCallbackController = async (req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | void> => {
    const { code } = req.query;
    console.log(code)

    try {
        const { data } = await axios.post('https://github.com/login/oauth/access_token', {
            client_id: process.env.GITHUB_OAUTH_CLIENT_ID,
            client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET, 
            code: code,
            // redirect_uri: 'http://localhost:8080'
        }, {
            headers: {
                Accept: 'application/json'
            }
        });

        const { access_token } = data;
        console.log('access_token:', access_token, "data: ", data);

        return res.status(200).send(access_token);
    } catch (error) {
        console.log('Error in githubCallbackController.ts', error);
        return next(error);
    }
}