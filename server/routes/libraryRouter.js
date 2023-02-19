// Import express
const express = require('express');
// Import required controllers
const LibraryController = require('../controllers/LibraryController');
// Require express router
const router = express.Router();

//// Specific routing goes here for .get, .post, etc....

// Router for get request to library
router.get('/library', LibraryController.getLibrary, (req, res) =>
  // Sends 200 status and the entire library back to the client as aa payload
  res.status(200).json(res.locals.library)
);

// Export as router
module.exports = router;
