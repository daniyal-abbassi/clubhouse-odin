const signupController = {
    signupGet: (req,res) => {
        res.render('signupForm',{title: 'Sign Up',layout: './layouts/main'})
    }
}

module.exports=signupController;