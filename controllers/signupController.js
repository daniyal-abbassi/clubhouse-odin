
const signupController = {
    signupGet: (req,res) => {
        const messages = {
            error: req.flash('error')
        }
        res.render('signupForm',{title: 'Sign Up',layout: './layouts/main',messages,user: req.user})
    },
    
}

module.exports=signupController;