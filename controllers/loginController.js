


const loginController = {
    loginGet: (req,res) => {
        res.render('loginForm',{layout: './layouts/main',title: 'Log In'})
    }
}

module.exports=loginController;