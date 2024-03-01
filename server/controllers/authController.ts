import express, { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/userModel';
import mongoose from 'mongoose';
const SALT_WORK_FACTOR = 10;

export const registerController = async (req: Request, res: Response, next: NextFunction): Promise< Response<Record<string, any>> |void> => { // /auth/register
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, SALT_WORK_FACTOR); // hash password
        const newUser = await new User({
            username: username,
            email: email,
            password: hashedPassword,
            investing: 0,
            date_created: Date.now()
        });
        const result = await newUser.save();
        const idemCheckEmail = await User.findOne({ email });

        if (result) { // result is newUser obj, and keys: _id & _v
            return res.status(201).send({
                message: "Success",
                user_id: result._id,
                username: result.username,
                user_email: result.email,
                user_investment: result.investing,
                date_created: result.date_created,
            })
        } else {
            return res.status(200).redirect('/build'); // meta, amazon - these companies send a 200 status code and then redirect user to a different page if same email is entered
            // res.status(200).redirect('back'); => in Express 4.x, use 'back' to automatically redirect back to the page the request came from
        }
    } catch (error) {
        console.log("ERROR in AUTHCONTROLLER FOR REGISTER", error)
        res.status(200).redirect('/build'); // meta, amazon - these companies send a 200 status code and then redirect user to a different page if same email is entered
        return next(error);
    }
}

export const loginController = async (req: Request, res: Response, next: NextFunction) => { // /auth/login
    console.log(req.query)
    try {
        const { email, password } = req.body; 
        const user = await User.findOne({ email: email }); // check if email user entered exists
        if (!user) return res.status(404).json({ message: "No email for user found."}); // no user with email entered is found
        // if email is found, then compare the password entered with the hashed pasword => make sure compare(entered, hashed)
        const passwordCheck = await bcrypt.compare(password, user.password);
        
        // if password does NOT match aka is invalid, 401 = invalid credentials
        if (passwordCheck === false) return res.status(401).json({ message: 'Incorrect password.'});

        const jwtPayload = {
            user_id: user._id,
            user_email: user.email
        };
    
        // create a random JWT token: jwt.sign(payload, secretOrPrivateKey, [options, callback])
        const token = jwt.sign(jwtPayload, "RANDOM-TOKEN", { expiresIn: "24h" });

        // return successful res with token
        return res.status(201).json({
            message: "Success",
            user_id: user._id,
            username: user.username,
            user_email: user.email,
            user_investment: user.investing,
            date_created: user.date_created,
            token: token, 
        });
    } catch (error) {
        console.log('loginController', error)
        res.status(200).redirect('/build'); // meta, amazon - these companies send a 200 status code and then redirect user to a different page if same email is entered
        return next(error);
    }
}



/*
When you call var user = new User({}) you are creating a new MongoDB document based on the User model and assigning it to var user.

A single user document does not have a find() function, but your User model does.

var user = new User({});
User.find().then(...);
*/