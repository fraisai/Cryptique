/**
 * Verifies that watchlistCrudController endpoints give 200 ok status and data is in desired format
 */
const { test, after } = require('node:test'); // in built nodeJS testing module
const mongoose = require('mongoose'); 
const supertest = require('supertest');
const server = require('../../server/server');
const api = supertest(server); // wraps server with supertest function into a super agent object. can use this object to make http requests to server

// const mongoDbConnect = require('../../server/models/mongoConnect');
// mongoDbConnect();
const pool = require('../models/sqlModel'); // connect server to database aka connecting to the db.js file

test('All cards are returned as JSON obj', async (done) => {
  await api.get('/watchlist/cards').expect(200).expect('Content-Type', /application\/json/).end(done);
})

test('Single card is returned as JSON obj', async (done) => {
    (await api.get('/watchlist/cards/1').expect(200).expect('Content-Type', '/application\/json/')).end(done);
})

afterAll(async (done) => {
  await mongoose.connection().close();
  done();
})


/**
 * let server, agent;

beforeEach((done) => {
    server = app.listen(4000, (err) => {
      if (err) return done(err);

       agent = request.agent(server); // since the application is already listening, it should use the allocated port
       done();
    });
});

afterEach((done) => {
  return  server && server.close(done);
});

it('description', async () => {
   // use agent instead of manually calling `request(app)` each time
   await agent.get('/some-path-relative-to-the-express-app')
});

 * mongodb-memory-server: 
 * can be beneficial to implement some of the backend tests by mocking the database instead of using a real database. One library that could be used for this is mongodb-memory-server.
 * This package spins up an actual/real MongoDB server programmatically from within nodejs, for testing or mocking during development. By default it holds the data in memory. 
 * A fresh spun up mongod process takes about 7Mb of memory. The server will allow you to connect your favorite ODM or client library to the MongoDB server and run integration tests isolated from each other.
 * 
 * 
 * 
 * // if email is incorrect or DNE then { "message": "No email for user found." "}
// if password is incorrect then { message: 'Incorrect password.'}
// if email and password is correct then { message: "Success", user_id: user._id, username: user.username, user_email: user.email, user_investment: user.investing, date_created: user.date_created, token: token, }
 */