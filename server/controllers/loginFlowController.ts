import express, { Request, Response, NextFunction } from "express";
import axios from 'axios';
const dotenv = require('dotenv');
dotenv.config();
const github_url: string = '' + process.env.GITHUB_OAUTH_LOGIN_URL;

/**
 * github oauth 2.0 - redirects user to github.com to log in
 */
export const githubLoginController = async (req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | void>  => { //auth/github-login
    console.log('githubLoginController', github_url)
    try {
        const payload = {
            status: 'success',
            redirect: github_url
        }
        return res.status(200).json(payload);
        return res.redirect(github_url);
    } catch (error) {
        console.log('Error in loginFlowController.ts: githubLoginController', error);
        // res.status(200).redirect('back'); // in Express 4.x, use 'back' to automatically redirect back to the page the request came from
        return next(error);
    }
}

/**
 * 
 */
export const githubCallbackController = async (req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | void> => { // auth/callback
    const { code } = req.query;
    console.log('githubCallbackController', code);
    // redirect = frontend/auth/callback
    try {
        // exchange authorization code with access token
        const tokenResponse = await axios.post('https://github.com/login/oauth/access_token', {
            client_id: process.env.GITHUB_OAUTH_CLIENT_ID,
            client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET, 
            code: code,
            // redirect_uri: "http://localhost:8080/auth"
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