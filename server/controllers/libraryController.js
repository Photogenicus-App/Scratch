//// Require model here
const Library = require('../models/LibraryModel');

const LibraryController = {
  // Retreive all libraries from the database and send it in the response
  // Sends the found libraries
  // Using async/await in try/catch blocks
  async getLibrary(req, res, next) {
    try {
      // Await result of finding library and assign to foundLibrary
      const foundLibrary = await Library.find();
      // If no libraries found return error of no library found
      if (!foundLibrary.length) {
        return next({
          log: 'No libraries found',
          status: 400,
          message: { err: 'No libraries returned from database' },
        });
      }
      // Assigns found library to our locals object to return
      res.locals.library = foundLibrary;
      return next();
      // Catch block to return any other errors other than a null return of finding libraries
    } catch (error) {
      return next({
        log: 'Error within getLibrary',
        status: 400,
        message: { err: 'Error finding Library' },
      });
    }
  },
  // Create new library
  // Using similar async/await and try catch block format as above
  async newLibrary(req, res, next) {
    try {
      // Deconstruct request body to sanitize data
      const { title, description, studyMaterial } = req.body;
      // Create new library with our deconstructed request body
      const newLibrary = await Library.create({
        title,
        description,
        studyMaterial,
      });
      // Error handler for error within creating new library
      if (!newLibrary) {
        return next({
          log: 'No library created',
          status: 400,
          message: { err: 'No new library created' },
        });
      }
      // Assign new library for return
      res.locals.newLibrary = newLibrary;
      return next();
      // Catch block for other errors within middleware
    } catch (error) {
      return next({
        log: 'Error within newLibrary',
        status: 400,
        message: { err: 'Error creating Library' },
      });
    }
  },
  ///other middleware here
};

module.exports = LibraryController;
