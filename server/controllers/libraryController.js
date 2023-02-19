////import model and require here
const Library = require('../models/LibraryModel');

const LibraryController = {
  //get library from the database
  async getLibrary(req, res, next) {
    try {
      const foundLibrary = await Library.find();
      if (!foundLibrary) {
        return next({
          log: 'Library not found',
          status: 400,
          message: { err: 'Cannot find library' },
        });
      }
      res.locals.library = foundLibrary;
      return next();
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
