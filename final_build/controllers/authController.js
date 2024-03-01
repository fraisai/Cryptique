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
exports.loginController = exports.registerController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = require("../models/userModel");
const SALT_WORK_FACTOR = 10;
const registerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = yield bcrypt_1.default.hash(password, SALT_WORK_FACTOR); // hash password
        const newUser = yield new userModel_1.User({
            username: username,
            email: email,
            password: hashedPassword,
            investing: 0,
            date_created: Date.now()
        });
        // use mongoose's method of UPSERT in order to guarantee idempotency: const result = await newUser.findOneAndUpdate({ email: email}, newUser, { new: true, upsert: true });
        // .findOneAndUpdate(filter, update, {new: true, upsert: true }) => if no document matches filter, MongoDB will insert one by combining filter and update 
        const idemCheckUsername = yield newUser.exists({ email: email }); // check if other email present
        console.log("NEWUSER: ", newUser, username, email, password, idemCheckUsername);
        return res.status(200).json('check');
        const idemCheckEmail = yield newUser.findOne({ email: email });
        if (idemCheckUsername)
            return res.status(200).redirect('/build');
        const result = yield newUser.save();
        if (result) { // result is newUser obj, and keys: _id & _v
            res.status(201).send({ message: 'User created successfully', result });
        }
        else {
            console.log("DUPLICATE????", result);
            res.status(200).redirect('/build'); // meta, amazon - these companies send a 200 status code and then redirect user to a different page if same email is entered
            // res.status(200).redirect('back'); => in Express 4.x, use 'back' to automatically redirect back to the page the request came from
        }
        return;
    }
    catch (error) {
        console.log("ERROR in AUTHCONTROLLER FOR REGISTER", error);
        res.status(200).redirect('/build'); // meta, amazon - these companies send a 200 status code and then redirect user to a different page if same email is entered
        return next(error);
    }
});
exports.registerController = registerController;
const loginController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield userModel_1.User.findOne({ email: email }); // check if email user entered exists
        if (!user)
            return res.status(404).json({ message: "No email for user found." }); // no user with email entered is found
        // if email is found, then compare the password entered with the hashed pasword
        const passwordCheck = yield bcrypt_1.default.compare(password, user.password);
        console.log('req.body0', req.body);
        console.log('login user', typeof user.password, typeof password, passwordCheck);
        return res.status(401).json({ message: 'check.' });
        // if password does NOT match aka is invalid, 401 = invalid credentials
        if (passwordCheck === false)
            return res.status(401).json({ message: 'Incorrect password.' });
        const jwtPayload = {
            user_id: user._id,
            user_email: user.email
        };
        // create a random JWT token: jwt.sign(payload, secretOrPrivateKey, [options, callback])
        const token = jsonwebtoken_1.default.sign(jwtPayload, "RANDOM-TOKEN", { expiresIn: "24h" });
        // return successful res with token
        return res.status(200).json({
            message: "Success",
            user_id: user._id,
            username: user.username,
            user_email: user.email,
            user_investment: user.investing,
            date_created: user.date_created,
            token: token,
        });
    }
    catch (error) {
        console.log('loginController', error);
        res.status(200).redirect('/build'); // meta, amazon - these companies send a 200 status code and then redirect user to a different page if same email is entered
        return next(error);
    }
});
exports.loginController = loginController;
//# sourceMappingURL=authController.js.map