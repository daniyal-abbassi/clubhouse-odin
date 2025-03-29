//require localStrategy and bcrypt/passport
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('./models/User');



//create a new instanse of localStrategy
passport.use('local-signup',new LocalStrategy({

    //declare field configs
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true},
    //delcare callbackfunction
    async(req,username,password,done)=>{
        try {
            //check for existing user
            const existingUser = await User.findOne(username);
            if(existingUser) {
                return done(null,false,{message: "username is already exists!!!"})
            }
            //hash password
            const hashedPassword = await bcrypt.hash(password, 10);
            //create a new user
            const newUser = await User.addToUsers(req.body.fullName,username,hashedPassword);
            //returnig newuser with no error
            return done(null,newUser);
        } catch (error) {
            return done(error)
        }
    } 
))



//serialization and deserialization
passport.serializeUser((user,done)=>{
    done(null,user.user_id)
})

passport.deserializeUser(async(user_id,done)=>{
    try {
        const user = await User.findById(user_id);
        return done(null,user)
    } catch (error) {
        return done(error)        
    }
})