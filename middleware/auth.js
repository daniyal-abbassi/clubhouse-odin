const ensureLoggedIn = (req,res,next)=>{
    if(req.isAuthenticated()) {
        return next()
    }
    req.flash('error','You need to log in to wirte a post')
    res.redirect('/log-in')
}

module.exports=ensureLoggedIn