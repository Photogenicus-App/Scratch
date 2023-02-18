const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.MONGO_URL;

//connecting to database function
const database = (module.exports = () => {
  //parameters for connecting to database
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  //try to connect to database with the associated URI, and the connectionParams which we have declared
  try {
    mongoose.connect(
      'mongodb+srv://BigT323:BigT323@cluster0.lzo06x7.mongodb.net/scratch?retryWrites=true&w=majority',
      connectionParams
    );
    //log if connection is successful
    console.log('Successfully connected to database');
    //catch block if there is an error
  } catch (error) {
    console.log(error);
    console.log('Failed to connect to database');
  }
});
//calling database
database();

//catch all route handler
app.use((req, res) => res.status(404).send('This page does not exist'));

//listen on env port or port 3000;
app.listen(process.env.PORT || 3000, () => {
  console.log('Back end server is running');
});

//export to app
module.exports = app;
