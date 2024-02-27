import express, { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/userModel';
const SALT_WORK_FACTOR = 10;

export const registerController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { password, username, email } = req.body;
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

        if (result) { // result is newUser obj, and keys: _id & _v
            res.status(201).send({ message: 'User created successfully', result })
        } else {
            console.log("DUPLICATE????", result)
            res.status(200).redirect('/build'); // meta, amazon - these companies send a 200 status code and then redirect user to a different page if same email is entered
            // res.status(200).redirect('back'); => in Express 4.x, use 'back' to automatically redirect back to the page the request came from
        }
        return next();
    } catch (error) {
        console.log("ERROR in AUTHCONTROLLER FOR REGISTER", error)
        res.status(200).redirect('/build'); // meta, amazon - these companies send a 200 status code and then redirect user to a different page if same email is entered
        return next(error);
    }
}

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
    const { username, email } = req.body; 
    // check if email OR username user entered exists
    const user = await User.findOne({ username: username});
    const userEmail = await User.findOne({ email: email });

}