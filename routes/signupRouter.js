const {Router} = require('express');
const signupRouter = Router();
const signupController = require('../controllers/signupController');

signupRouter.get('/',signupController.signupGet)
signupRouter.post('/',signupController.signupPost)



module.exports=signupRouter;