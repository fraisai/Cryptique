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
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
module.exports = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //   get the token from the authorization header
        const token = yield request.headers.authorization.split(" ")[1];
        //check if the token matches the supposed origin
        const decodedToken = yield jwt.verify(token, "RANDOM-TOKEN");
        // retrieve the user details of the logged in user
        const user = yield decodedToken;
        // pass the user down to the endpoints here
        request.user = user;
        // pass down functionality to the endpoint
        next();
    }
    catch (error) {
        response.status(401).json({
            error: new Error("Invalid request!"),
        });
    }
});
//# sourceMappingURL=endpointController.js.map