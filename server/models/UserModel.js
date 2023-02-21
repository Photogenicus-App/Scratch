const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// here we hash the password when a new user doc is created
UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 1);
  return next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
