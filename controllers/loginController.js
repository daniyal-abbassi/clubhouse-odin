


const loginController = {
    loginGet: (req,res) => {
        const messages = {
            error: req.flash('error')
        }
        res.render('loginForm',{layout: './layouts/main',title: 'Log In',messages,user: req.user})
    }
}

module.exports=loginController;