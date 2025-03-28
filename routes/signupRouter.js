const {Router} = require('express');
const signupRouter = Router();
const signupController = require('../controllers/signupController');

signupRouter.get('/',signupController.signupGet)




module.exports=signupRouter;