const {Router} = require('express');
const signupRouter = Router();
const signupController = require('../controllers/signupController');
const passport = require('passport');
const validateUser = require('../validator');


signupRouter.get('/',signupController.signupGet)
signupRouter.post('/',validateUser,passport.authenticate('local-signup',{
    successRedirect: '/messages',
    failureRedirect: '/sign-up',
    failureFlash: true
}))



module.exports=signupRouter;