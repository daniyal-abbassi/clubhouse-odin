const {Router} = require('express');
const signupRouter = Router();
const signupController = require('../controllers/signupController');
const passport = require('passport');

signupRouter.get('/',signupController.signupGet)
signupRouter.post('/',passport.authenticate('local-signup',{
    successRedirect: '/sign-up',
    failureRedirect: '/sign-up'
}))



module.exports=signupRouter;