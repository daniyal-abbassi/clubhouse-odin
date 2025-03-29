const {Router} = require('express');
const messagesRouter = Router();
const messagesController = require('../controllers/messagesController');
const ensureLoggedIn = require('../middleware/auth');

messagesRouter.get('/',messagesController.messagesGet)
messagesRouter.get('/new-message',ensureLoggedIn,messagesController.addMessageGet)

module.exports=messagesRouter;