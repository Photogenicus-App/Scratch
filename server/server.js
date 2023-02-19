const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
// const uri = process.env.MONGO_URI;
// dotenv.config();
//import router
const libraryRouter = require('./routes/libraryRouter.js');

//handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connecting to database function
const database = (module.exports = () => {
  //parameters for connecting to database
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  //try to connect to database with the associated URI, and the connectionParams which we have declared
  try {
    mongoose
      .connect(
        'mongodb+srv://BigT323:BigT323@cluster0.lzo06x7.mongodb.net/scratch?retryWrites=true&w=majority',
        connectionParams
      )
      .then(() => console.log('Successfully connected to database'));
    //log if connection is successful

    //catch block if there is an error
  } catch (error) {
    console.log(error);
    console.log('Failed to connect to database');
  }
});
//calling database
database();

//define route handlers here
app.use('/lib', libraryRouter);

//catch all route handler
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

//listen on env port or port 3000;
app.listen(process.env.PORT || 3000, () => {
  console.log('Back end server is running');
});

//export to app
module.exports = app;
