const express = require('express');
const app = express();
//require passport
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
require('dotenv').config();
//require routers
const signupRouter=require('./routes/signupRouter');
const loginRouter = require('./routes/loginRouter');
const messagesRouter = require('./routes/messagesRouter');
const membershipRouter = require('./routes/membershipRouter');

require('./passport-config');
app.use(express.urlencoded({extended: true}));
//require layout
const expressLayouts = require('express-ejs-layouts');


//use public folder
app.use(express.static('public'));
//use expressLayouts
app.use(expressLayouts);
//set layout
app.set('layout','./layouts/main');
//set view engine
app.set('view engine','ejs');

//implement session
app.use(session({
    secret: process.env.SECRET || 'my-cute-cat',
    resave: false,
    saveUninitialized: false
}))

app.use(flash());
//initialize authentication before routes
app.use(passport.initialize());
app.use(passport.session());
//routers here
app.use('/sign-up',signupRouter)
app.use('/log-in',loginRouter)
app.use('/messages',messagesRouter)
app.use('/membership',membershipRouter)




const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`server is running on port: ${PORT}`));