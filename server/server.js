const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// URI requirements for .env
require('dotenv').config();
const uri = process.env.MONGO_URI;
const PORT = 3000;

// Connecting to database function. Async await with a try/catch block
const database = async () => {
  // Parameters for connecting to database
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  // Try to connect to database with the associated URI, and the connectionParams which we have declared
  try {
    await mongoose.connect(uri, connectionParams);
    // Await connection and log if successful
    console.log('Successfully connected to database');
    // Catch block for failed connections
  } catch (error) {
    console.log(error);
    console.log('Failed to connect to the database');
  }
};
// Calling database
database();

// Handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routers
const libraryRouter = require('./routes/libraryRouter.js');

// Defining route handlers
app.use('/data', libraryRouter);

// Unknown route handler
app.use((req, res) => res.status(404).send('This page does not exist'));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Function to start server with database function
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

// Export to app
module.exports = app;
