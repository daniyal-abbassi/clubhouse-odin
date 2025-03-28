const User = require('../models/User');

const signupController = {
    signupGet: (req,res) => {
        res.render('signupForm',{title: 'Sign Up',layout: './layouts/main'})
    },
    //signup post for savign to database
    signupPost: async(req,res)=>{
        try {
            const {fullName,username,password} = req.body;
            await User.addToUsers(fullName,username,password); 
            console.log('user added successfully!!!')
        } catch (error) {
            console.error(`ERROR IN SIGNUP CONTROLLER: ${error}`)
            res.status(500).send('SERVER ERROR')
        }
    }
}

module.exports=signupController;