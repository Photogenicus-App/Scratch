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
        log: `Error finding library`,
        status: 400,
        message: { err: 'Error finding Library' },
      });
    }
  },
  // Create new library entry
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
        log: `Error creating new library`,
        status: 400,
        message: { err: 'Error creating new Library' },
      });
    }
  },

  // Edit existing library entry
  // Using similar async/await and try catch block format as above
  async editLibrary(req, res, next) {
    try {
      // Deconstuct body for sanitization
      const { _id, title, description, studyMaterial } = req.body;
      // Use deconstructed id in our first parameter of filter, and updated fields in second update parameter
      const editLibrary = await Library.findOneAndUpdate(
        // Filter parameter
        { _id: _id },
        // Update parameter
        {
          title,
          description,
          studyMaterial,
        },
        // Setting new to true will return updated document
        { new: true }
      );
      // Error handler with specific message pointing to id
      if (!editLibrary) {
        return next({
          log: `Library not edited for id ${id}`,
          status: 400,
          message: { err: `Unable to edit library with id ${id}` },
        });
      }
      // Assign new library for return
      res.locals.editLibrary = editLibrary;
      return next();
      // Catch block for other errors within middleware
    } catch (error) {
      return next({
        log: `Error editing library`,
        status: 400,
        message: { err: 'Error editing Library' },
      });
    }
  },
  // Delete an existing library entry
  async deleteLibrary(req, res, next) {
    try {
      // Deconstuct body for sanitization
      const { _id } = req.body;
      // Use deconstructed id as our filter parameter
      const deleteLibrary = await Library.findOneAndDelete({ _id: _id });
      if (!deleteLibrary) {
        return next({
          log: `Library not deleted for id ${id}`,
          status: 400,
          message: { err: `Unable to delete library with id ${id}` },
        });
      }
      // Assign deleted library for return
      res.locals.deleteLibrary = deleteLibrary;
      return next();
      // Catch block for other errors within middleware
    } catch (error) {
      return next({
        log: `Error deleting library`,
        status: 400,
        message: { err: 'Error deleting Library' },
      });
    }
  },
};

module.exports = LibraryController;
