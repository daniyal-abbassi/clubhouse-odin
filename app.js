const express = require('express');
const app = express();
//require passport
const passport = require('passport');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const pool = require('./database/pool');
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
    store: new pgSession({
        pool: pool,
        createTableIfMissing: true,
        
    }),
    secret: process.env.SECRET || 'my-cute-cat',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 }
}))

app.use(flash());
//initialize authentication before routes
app.use(passport.initialize());
app.use(passport.session());
//routers here
app.get('/',messagesRouter)
app.use('/sign-up',signupRouter)
app.use('/log-in',loginRouter)
app.use('/messages',messagesRouter)
app.use('/membership',membershipRouter)
app.get('/log-out',(req,res)=>{
    req.logout(err=>{
        if(err) {
            return next(err)
        }
        res.redirect('/messages')
    })
})



const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`server is running on port: ${PORT}`));