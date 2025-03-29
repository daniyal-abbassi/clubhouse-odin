//require validations
const {body,validationResult} = require('express-validator');
//define rules
const validateUser = [
    body('fullName').trim()
        .isAlpha().withMessage('Fullname must only contain letters!!!')
        .isLength({min:3,max:40}).withMessage('Fullname must be between 3 and 40 characters!!!'),
    body('username').trim()
        .isLength({min:3,max:20}).withMessage('Username must be between 3 and 20 characters!!!'),
    body('password').trim()
        .isLength({min:4}).withMessage('Password must atleast contain 4 characters!!!'),
    body('confirmPassword').trim()
        .notEmpty()
        .withMessage('Please Confirm Your Password!!!')
        .custom((value,{req})=>{
            if(value !== req.body.password) {
                throw new Error('Password confirmation does not match.')
            }
            return true
        }),
        (req,res,next)=>{
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return res.status(400).render('signupForm',{layouts: './layouts/main',title: 'sign up',errors: errors.array()})
            }
            next();
        }
        
]



//export validator

module.exports=validateUser;