import express, { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/userModel';
const SALT_WORK_FACTOR = 10;

export const registerController = async (req: Request, res: Response, next: NextFunction) => {
    const { password, username, email } = req.body;
    try {
        // hash password
        const hashedPassword = await bcrypt.hash(password, SALT_WORK_FACTOR);

        const newUser = await new User({
            username: username,
            email: email,
            password: hashedPassword,
            investing: 0,
            date_created: Date.now()
        });

        const result = await newUser.save();
        if (result) { // result is newUser with _id & _v
            return res.status(201).send({ message: 'User created successfully', result })
        } else {
            // in Express 4.x, use 'back' to automatically redirect back to the page the request came from
            console.log("DUPLICATE????", result)
            return res.status(200).redirect('/build'); // meta, amazon - these companies send a 200 status code and then redirect user to a different page if same email is entered
        }
        
        return next();
    } catch (error) {
        console.log("ERROR in AUTHCONTROLLER FOR REGISTER", error)
        return res.status(200).redirect('/build'); // meta, amazon - these companies send a 200 status code and then redirect user to a different page if same email is entered
        return next(error);
    }
}