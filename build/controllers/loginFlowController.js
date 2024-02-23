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
 *
 * @param req
 * @param res
 * @param next
 * @returns
 */
const githubLoginController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('githubLoginController', github_url);
    try {
        return res.redirect(github_url);
    }
    catch (error) {
        console.log('Error in loginFlowController.ts: githubLoginController', error);
        return next(error);
        // return res.status(301).redirect('/');
    }
});
exports.githubLoginController = githubLoginController;
/**
 *
 * @param req
 * @param res
 * @param next
 * @returns
 */
const githubCallbackController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { code } = req.query;
    console.log(code);
    try {
        console.log("callback code: ", code);
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
        console.log(data);
        const { access_token } = data;
        console.log('access_token:', access_token);
        return res.status(200).send(access_token);
        // res.redirect('/')
    }
    catch (error) {
        console.log('Error in githubCallbackController.ts', error);
        return next(error);
    }
});
exports.githubCallbackController = githubCallbackController;
//# sourceMappingURL=loginFlowController.js.map