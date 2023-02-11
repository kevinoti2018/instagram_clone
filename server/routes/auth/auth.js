const express = require('express')
const authRouter = express.Router()

const{register,login,refreshtoken,resetPassword,newPassword} = require ('../../controllers/authControllers')
authRouter.post('/signup',register)
authRouter.post('/signin',login)
authRouter.post('/reset-password',resetPassword)
authRouter.post('/new-password',newPassword)
authRouter.post('/refresh-token',refreshtoken)
authRouter.post('/logout',(req,res)=>{})


module.exports = authRouter