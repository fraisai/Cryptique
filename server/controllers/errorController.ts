import express, { Request, Response, NextFunction } from "express";

/**
 * Error handling Middleware function for logging the error message
 */
export const errorLogger = (error, request, response, next) => {
    console.log( `error ${error.message}`) 
    next(error) // calling next middleware

}

/**
 * Error handling Middleware function reads the error message and sends back a response in JSON format
 */
export const errorResponder = (error, request, response, next) => {
    response.header("Content-Type", 'application/json')
      
    const status = error.status || 400
    response.status(status).send(error.message)
  }
  
  // Fallback Middleware function for returning 
  // 404 error for undefined paths
  const invalidPathHandler = (request, response, next) => {
    response.status(404)
    response.send('invalid path')
  }
  
  // Route with a handler function which throws an error
  app.get('/productswitherror', (request, response) => {
    let error = new Error(`processing error in request at ${request.url}`)
    error.statusCode = 400
    throw error
  })
  
  app.get('/products', async (request, response) => {
    try{
      const apiResponse = await axios.get("http://localhost:3001/products")
  
      const jsonResponse = apiResponse.data
      
      response.send(jsonResponse)
    }catch(error){
      next(error) // calling next error handling middleware
    }
  
  })
  