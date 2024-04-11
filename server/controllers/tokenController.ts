import { Request, Response, NextFunction } from 'express';
const jwt = require("jsonwebtoken");

export const tokenController = async (request: Request | any, response: Response, next: NextFunction) => {
  try {
    const token = await request.headers.authorization.split(" ")[1]; // get the token from the authorization header
    const decodedToken = await jwt.verify(token, "RANDOM-TOKEN");  // check if the token matches the supposed origin
    const user = await decodedToken;  // retrieve the user details of the logged in user

    // pass the user down to the endpoints here
    request.user = user;

    // pass down functionality to the endpoint
    return next();
    
  } catch (error) {
    console.log('Error in tokenController.ts', error);
    return next(error);
    // return response.status(401).json({
    //   error: new Error("Invalid request!"),
    // });
  }
};
