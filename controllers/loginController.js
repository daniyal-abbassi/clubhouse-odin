


const loginController = {
    loginGet: (req,res) => {
        const messages = {
            error: req.flash('error')
        }
        res.render('loginForm',{layout: './layouts/main',title: 'Log In',messages})
    }
}

module.exports=loginController;