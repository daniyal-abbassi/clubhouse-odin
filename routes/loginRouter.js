const {Router} = require('express');
const loginRouter = Router();
const loginController = require('../controllers/loginController');
const passport = require('passport');

loginRouter.get('/',loginController.loginGet)
loginRouter.post('/',passport.authenticate('local-login',{
    successRedirect: '/log-in',
    failureRedirect: '/log-in',
    failureFlash: true
}))





module.exports=loginRouter;