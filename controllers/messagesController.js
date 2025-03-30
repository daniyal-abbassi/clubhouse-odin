const Messages = require('../models/Messages')

const messagesController = {
    messagesGet: async (req,res)=>{
        try {
            //pass messages for showing in page
            const messages = await Messages.getAllMessages();
            res.render('messages',{layout: './layouts/main',title: 'Messages',messages,user: req.user})     
        } catch (error) {
            console.error('ERROR IN MESSAGES.messagesGet: ',error)
            res.status(500).send('SERVER ERROR!')
        }
    },
    addMessageGet: (req,res)=>{
        if(!req.user.membership) {
            return res.redirect('/messages?message=you need to upgrade to wirte a post')
        }
        res.render('addMessage',{layout: './layouts/main',title: 'Add Message',user: req.user})
    },
    addMessagePost: async(req,res)=>{
        try {
            const message = req.body.message;
            const title = req.body.title;
            const {user_id} = req.user;
            await Messages.createMessage(user_id,message,title)
            res.redirect('/messages')
        } catch (error) {
            console.error('ERROR IN MESSAGES.addMessagePost: ',error)
            res.status(500).send('SERVER ERROR!')
        }
    }
}

module.exports=messagesController;