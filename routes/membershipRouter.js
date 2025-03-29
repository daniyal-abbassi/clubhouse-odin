const {Router} = require('express');
const membershipRouter = Router();
const ensureLoggedIn = require('../middleware/auth');

membershipRouter.get('/',ensureLoggedIn,(req,res)=>{
    res.render('upgradeMembership',{title: 'Upgrade Membership'})
})





module.exports=membershipRouter;