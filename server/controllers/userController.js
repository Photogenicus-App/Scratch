const User = require('../models/UserModel');

const UserController = {

    async registerUser(req, res, next) {
    //decl newUser 
    //assign post request body inputs to user 
    //try
    try {
        console.log(req.body, `client input`)
        const {username, password, email} = req.body;
        const newUser = await User.create({
            username,
            password,
            email,
        });
        //perform cond to any input is null 
        console.log(newUser, 'newUser')
        if(!newUser){
            return next({
                log: 'User not created',
                status: 400,
                message: { err: 'Could not create user' },
              });
        };
        res.locals.newUser = newUser;
        //return to route hander
         return next();
    }
    //catch
    catch (error){
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
        const {userName, password} = req.body;
        const userLogin = await User.findOne({
            userName
        }, async (err, user)=>{
            if(!userLogin){
                return next({
                    log: 'User login unsuccesful',
                    status: 401,
                    message: { err: 'Invalid Login' },
                  });
            };
            //cond to see if pw does not match 
            if (user){
                //declare var to store eval of async bcrypt function to compare hashed vs input pw
                const valid = await bcrypt.compare(password, user.password); 
                //perform cond if theres an eval then we invoke next middleware (verAuth)
                if(valid){
                    //declare the access token
                    return next();
    
                }
                else res.redirect("/register");
            }
            res.locals.newUser = newUser;
            //return to route hander
             return next();
    

        });
        //perform cond to any input is null 
        
    }
    //catch
    catch (error){
        return next({
        log: 'Error logging in user',
        status: 400,
        message: { err: 'Error loggin in user' },
      });
        
    }
}
}

module.exports = UserController;