import express, { Request, Response, NextFunction } from "express";

/**
 * Custom error object used in error handling middleware function
 */
class ErrorObj extends Error {
    statusCode: number;

    constructor(status: number, message: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = Error.name;
        this.statusCode = status;
        Error.captureStackTrace(this);
    }
}

/**
 * request logger
 */
export const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
    console.log(req, `requestLogger: request method: ${req.method}, request url: ${req.url}, body: ${JSON.stringify(req.body)} ${JSON.stringify(req.query)} ${JSON.stringify(req.params)} ${JSON.stringify(req.headers.referer)}`);
    return next();
}


/**
 * Error handling Middleware function for logging the error message
 */
export const errorLogger = (error: ErrorObj, req: Request, res: Response, next: NextFunction): void => {
    console.log( `error ${error.message}`);
    return next(error);
}

/**
 * Error handling Middleware function reads the error message and sends back a response in JSON format
 */
// export const errorResponder = (error: ErrorObj, req: Request, res: Response, next: NextFunction) => {
//     res.header("Content-Type", 'application/json')
//     const status = error.statusCode || 400;
//     return res.status(status).send(error.message);
// }
  
// /**
//  * Fallback Middleware function for returning 404 error for undefined paths
//  */
// export const invalidPathHandler = (req: Request, res: Response, next: NextFunction) => {
//     return res.status(404).send('Resource does not exist.');
// }
  
// // Route with a handler function which throws an error
// app.get('*', (req: Request, res: Response) => {
//     let error = new Error(`processing error in request at ${request.url}`)
//     error.statusCode = 400
//     throw error
// })

// app.get('/products', async (request, response) => {
//     try{
//         const apiResponse = await axios.get("http://localhost:3001/products")

//         const jsonResponse = apiResponse.data
        
//         response.send(jsonResponse)
//     }catch(error){
//         next(error) // calling next error handling middleware
//     }
// })


// // Attach the first Error handling Middleware
// // function defined above (which logs the error)
// app.use(errorLogger)

// // Attach the second Error handling Middleware
// // function defined above (which sends back the response)
// app.use(errorResponder)

// // Attach the fallback Middleware
// // function which sends back the response for invalid paths)
// app.use(invalidPathHandler)

