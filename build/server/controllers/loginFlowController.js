"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubCallbackController = exports.githubLoginController = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv = require('dotenv');
dotenv.config();
const github_url = '' + process.env.GITHUB_OAUTH_LOGIN_URL;
/**
 * github oauth 2.0 - redirects user to github.com to log in
 */
const githubLoginController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('githubLoginController', github_url);
    try {
        res.status(307).redirect(github_url);
        return;
    }
    catch (error) {
        console.log('Error in loginFlowController.ts: githubLoginController', error);
        // res.status(200).redirect('back'); // in Express 4.x, use 'back' to automatically redirect back to the page the request came from
        return next(error);
    }
});
exports.githubLoginController = githubLoginController;
/**
 *
 */
const githubCallbackController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { code } = req.query;
    console.log(code);
    return res.status(200).json('Success');
    try {
        const { data } = yield axios_1.default.post('https://github.com/login/oauth/access_token', {
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
    }
    catch (error) {
        console.log('Error in githubCallbackController.ts', error);
        return next(error);
    }
});
exports.githubCallbackController = githubCallbackController;
//# sourceMappingURL=loginFlowController.js.map