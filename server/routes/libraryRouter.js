//import express
const express = require('express');
//import controllers
const LibraryController = require('../controllers/LibraryController');
//require express router
const router = express.Router();

////specific routing goes here for .get, .post, etc....

//router for get request to library
router.get('/library', LibraryController.getLibrary, (req, res) =>
  //sends 200 status and the entire library back to the client as aa payload
  res.status(200).json(res.locals.library)
);

//export as router
module.exports = router;
