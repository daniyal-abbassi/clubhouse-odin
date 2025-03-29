const {Router} = require('express');
const messagesRouter = Router();
const messagesController = require('../controllers/messagesController');

messagesRouter.get('/',messagesController.messagesGet)
messagesRouter.get('/new-message',messagesController.addMessageGet)

module.exports=messagesRouter;