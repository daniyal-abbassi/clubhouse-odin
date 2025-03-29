const {Router} = require('express');
const membershipRouter = Router();
const ensureLoggedIn = require('../middleware/auth');
const User = require('../models/User');

membershipRouter.get('/',ensureLoggedIn,(req,res)=>{
    res.render('upgradeMembership',{title: 'Upgrade Membership'})
})

membershipRouter.post('/',ensureLoggedIn,async(req,res)=>{
    try {
        const upgradeCode = req.body.upgradeCode;
        if(upgradeCode==='FREEDOM'||upgradeCode==='freedom') {
            await User.upgradeUser(req.user.user_id);
            res.redirect('/messages?message=Membership upgraded!!!')
        } else {
            res.redirect('/membership?message=Code is FREEDOM')
        }
    } catch (error) {
        console.error('ERROR UPGRADE ROUTER: ',error)
        res.status(500).send('SERVER ERROR')
    }
})





module.exports=membershipRouter;