import express, { Request, Response, NextFunction } from "express";
import axios from 'axios';
import { access } from "fs";

const dotenv = require('dotenv');
dotenv.config();
const github_url: string = '' + process.env.GITHUB_OAUTH_LOGIN_URL;

export const githubLoginController = (req: Request, res: Response, next: NextFunction) => {
    console.log('githubLoginController', github_url)
    try {
        return res.redirect(github_url);
    } catch (error) {
        console.log('Error in loginFlowController.ts: githubLoginController', error);
        // return res.status(301).redirect('/');
    }
}

export const githubCallbackController = async (req: Request, res: Response, next: NextFunction) => {
    const { code } = req.query;
    console.log(code)

    try {
        console.log("callback code: ", code)
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

        console.log(data)
        const { access_token } = data;
        console.log('access_token:', access_token);

        return res.status(200).send(access_token);
        // res.redirect('/')
        return next();
    } catch (error) {
        console.log('Error in githubCallbackController.ts', error);
        // return res.status(301).redirect('/');
    }
}