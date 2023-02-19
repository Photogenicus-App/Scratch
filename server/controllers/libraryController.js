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
      if (!foundLibrary) {
        return next({
          log: 'Library not found',
          status: 400,
          message: { err: 'Cannot find library' },
        });
      }
      // Assigns found library to our locals object to return
      res.locals.library = foundLibrary;
      return next();
      // Catch block to return any other erros other than a null return of finding libraries
    } catch (error) {
      return next({
        log: 'Error within getLibrary',
        status: 400,
        message: { err: 'Error finding Library' },
      });
    }
  },

  ///other middleware here
};

module.exports = LibraryController;
