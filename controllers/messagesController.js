const Messages = require('../models/Messages')

const messagesController = {
    messagesGet: async (req,res)=>{
        try {
            //pass messages for showing in page
            const messages = await Messages.getAllMessages();
            res.render('messages',{layout: './layouts/main',title: 'Messages',messages})
            
        } catch (error) {
            console.error('ERROR IN MESSAGES: ',error)
            res.status(500).send('SERVER ERROR!')
        }
    }
}

module.exports=messagesController;