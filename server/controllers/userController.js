const User = require('../models/UserModel');
const bcrypt = require('bcrypt');

const UserController = {
  async registerUser(req, res, next) {
    //decl newUser
    //assign post request body inputs to user
    //try
    try {
      console.log(req.body, `client input`);
      const { username, password, email } = req.body;
      const newUser = await User.create({
        username,
        password,
        email,
      });
      //perform cond to any input is null
      console.log(newUser, 'newUser');
      if (!newUser) {
        return next({
          log: 'User not created',
          status: 400,
          message: { err: 'Could not create user' },
        });
      }
      res.locals.newUser = newUser;
      //return to route hander
      return next();
    } catch (error) {
      //catch
      return next({
        log: 'Error creating user',
        status: 400,
        message: { err: 'Error creating user' },
      });
    }
  },
  async loginUser(req, res, next) {
    //decl newUser
    //assign post request body inputs to user

    //try
    try {
      console.log(req.body, `client input`);
      const { username, password } = req.body;
      const userLogin = await User.findOne({ username });
      console.log(userLogin);
      if (!userLogin) {
        return next({
          log: 'User login unsuccesful',
          status: 401,
          message: { err: 'Invalid Login' },
        });
      }
      //cond to see if pw does not match
      console.log(password, `client pw entry`);
      console.log(userLogin.password, `db password`);
      const userLoginPW = userLogin.password;
      //declare var to store eval of async bcrypt function to compare hashed vs input pw
      // const valid = await
      const valid = await bcrypt.compare(password, userLoginPW);
      console.log(valid, `valid`);
      //perform cond if theres an eval then we invoke next middleware (verAuth)
      if (valid) {
        //declare the access token
        res.locals.userLogin = userLogin;
        return next();
      } else {
        return next({
          log: 'User login unsuccesful',
          status: 401,
          message: { err: 'Invalid Login' },
        });
        res.redirect('/register');

        //return to route hander
      }
      //perform cond to any input is null
    } catch (error) {
      //catch
      return next({
        log: 'Error logging in user',
        status: 400,
        message: { err: 'Error loggin in user' },
      });
    }
  },
};

module.exports = UserController;
