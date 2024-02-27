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

        // use mongoose's method of UPSERT in order to guarantee idempotency: const result = await newUser.findOneAndUpdate({ email: email}, newUser, { new: true, upsert: true });
        // .findOneAndUpdate(filter, update, {new: true, upsert: true }) => if no document matches filter, MongoDB will insert one by combining filter and update 
        const idemCheck = await newUser.findOne({ email: email }); // check if other email present
        if (idemCheck) return res.status(200).redirect('/build');
        
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
    const { email, password } = req.body; 
    try {
        // check if email user entered exists
        const user = await User.findOne({ email: `/${email}/i` });
        if (!user) return res.status(404).json({ message: "No email for user found."});
            
        // if email is found, then compare the password entered with the hashed pasword
        const passwordCheck = await bcrypt.compare(password, user.password);
    
        // if password does NOT match aka is invalid, 401 = invalid credentials
        if (passwordCheck === false) return res.status(401).json({ message: 'Incorrect password.'});
    
        const jwtPayload = {
            user_id: user._id,
            user_email: user.email
        };
    
        // create a random JWT token: jwt.sign(payload, secretOrPrivateKey, [options, callback])
        const token = jwt.sign(jwtPayload, "RANDOM-TOKEN", { expiresIn: "24h" });
    
        
    } catch (error) {
        
    }
}