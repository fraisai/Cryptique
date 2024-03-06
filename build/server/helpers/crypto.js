"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentication = exports.random = void 0;
const crypto = require('crypto');
const dotenv = require('dotenv');
dotenv.config();
const random = () => crypto.randomBytes(128).toString('base64');
exports.random = random;
const authentication = (salt, password) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(process.env.CRYPTO_SECRET).digest('hex');
};
exports.authentication = authentication;
//# sourceMappingURL=crypto.js.map