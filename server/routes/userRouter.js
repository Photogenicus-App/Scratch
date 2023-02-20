// require the JWT session authentication functions for callbacks
//const {verifyTokenAndAuthorization ,verifyTokenAndAuthorizationAndAdmin } = require("../controllers/verifyTokenAndAuthorizationAndAdmin");
//require in the user model
//require in the router
const router = require('express').Router();
const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const UserController = require('../controllers/UserController');
//set strict query to false

//register
router.post('/register', UserController.registerUser, (req, res) => {
  res.status(200).json(res.locals.newUser);
});

//login
router.post('/login', UserController.loginUser, (req, res) => {
  res
    .status(200)
    .json({ message: 'Login successful', user: res.locals.userLogin });
});

//get
// router.get('/find/:id', verifyTokenAndAuthorization, (req, res) =>
//   // Sends 200 status and the entire library back to the client
//   res.status(200).json(res.locals.library)
// );

// Router for post to library creating new library
// router.post('/library', LibraryController.newLibrary, (req, res) =>
//   // Sends 200 status and the created library back to the client
//   res.status(200).json(res.locals.newLibrary)
// );

// // Router for editing one instance of our library
// router.put('/library', LibraryController.editLibrary, (req, res) =>
//   res.status(200).json(res.locals.editLibrary)
// );

// // Router for deleting one library
// router.delete('/library', LibraryController.deleteLibrary, (req, res) =>
//   res.status(200).json(res.locals.deleteLibrary)
// );

//update

//delete
module.exports = router;
