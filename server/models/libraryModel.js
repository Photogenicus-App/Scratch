const mongoose = require('mongoose');

//schema with requirements of title, description, and studyMaterial
const LibrarySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: true },
    studyMaterial: { type: String, required: true },
  },
  { timestamps: true }
);

//declare is with the name Library
const Library = mongoose.model('Library', LibrarySchema);

module.exports = Library;
