const express = require('express');
const app = express();
require('dotenv').config();
const signupRouter=require('./routes/signupRouter');
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

//routers here
app.use('/sign-up',signupRouter)







const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`server is running on port: ${PORT}`));