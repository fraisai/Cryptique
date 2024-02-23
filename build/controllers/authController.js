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
exports.registerController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const userModel_1 = require("../models/userModel");
const SALT_WORK_FACTOR = 10;
const registerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, username, email } = req.body;
    try {
        // hash password
        const hashedPassword = yield bcrypt_1.default.hash(password, SALT_WORK_FACTOR);
        const newUser = yield new userModel_1.User({
            username: username,
            email: email,
            password: hashedPassword,
            investing: 0,
            date_created: Date.now()
        });
        const result = yield newUser.save();
        if (result) { // result is newUser with _id & _v
            return res.status(201).send({ message: 'User created successfully', result });
        }
        else {
            // in Express 4.x, use 'back' to automatically redirect back to the page the request came from
            console.log("DUPLICATE????", result);
            return res.status(200).redirect('/build'); // meta, amazon - these companies send a 200 status code and then redirect user to a different page if same email is entered
        }
        return next();
    }
    catch (error) {
        console.log("ERROR in AUTHCONTROLLER FOR REGISTER", error);
        return res.status(200).redirect('/build'); // meta, amazon - these companies send a 200 status code and then redirect user to a different page if same email is entered
        return next(error);
    }
});
exports.registerController = registerController;
//# sourceMappingURL=authController.js.map