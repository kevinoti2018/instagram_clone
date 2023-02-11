const User = require('../models/User')
const bcrypt = require('bcrypt')
const cookie = require('cookie')
const {createAccessToken,createRefreshToken} = require('../middleware/token')
const nodemailer = require('nodemailer')
const crypto = require ('crypto')
exports.register = async(req,res)=>{
    try{
        const {name,email,password} = req.body
        if(!email||!password||!name){
            return res.status(422).json({msg:'Please add all field data'})
        }
        const useremail = await User.findOne({email})
        // check if email is already in use
        if(useremail){
           return res.status(400).json({msg:"the mail is already in use"})
        }
    //     hash password
        const hashedpassword = await bcrypt.hash(password,12)
        // create new user
        const user = new User({
            email,
            password:hashedpassword,
            name
        })
        await user.save()
        res.json({msg:'registered successfully'})

    } catch(err){
        return res.status(400).json({
            msg:err.message
        })
    }
}

exports.login= async(req,res)=>{
   try{
    const {email,password} = req.body
    if(!email||!password){
        return res.status(422).json({msg:'Please add all field data'})
    }
    const user = await User.findOne({email})

    if(!user){
        return res.status(400).json({msg:'user does not exist'})
    }
    // match pasword
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(400).json({msg:'incorrect password'})
    }
    const access_token = createAccessToken({id:user._id})
    const refresh_token = createRefreshToken({id:user._id})

    // add cookie
    res.cookie('refreshtoken', refresh_token,{
        httpOnly:true,
        path:'/api/refresh_token',
        maxAge: 30*24*60*1000
    })
    res.json({
        msg: "login successful",
        access_token,
        user:{
            ...user._doc,
            password:''
        }
    })
   }
   catch(err){
    return res.status(400).json({msg: err.message})
   }
}


exports.refreshtoken = async (req,res)=>{
    try{
        const refresh_token = req.cookies.refreshToken
        if(!refresh_token){
            return res.status(400).json({msg: 'please login now'})
        }
        JsonWebTokenError.verify(refresh_token,process.env.REFRESH_TOKEN_SECRET, async(err,result)=>{
            if(err){
                return res.status(400).json({msg: 'please login now'})
                const user = await User.findById(result.id).select('password')
                .populate("_id name pic followers followung")

                if(!user){
                    return res.status(400).json({msg: 'user does not exist'})
                }
                const access_token = createAccessToken(
                    {id:result.id})
                res.json({
                    access_token,
                    user
                })
            }
        })
    }
    catch(err){
        return res.status(500).json({msg: 'something went wrong'})
    }
}

exports.resetPassword = (req,res)=>{
    let smtpTransport = nodemailer.createTransport({
        host:'smtp.gmail.com',
        service:'gmail',
        port:465,
        secure:true,
        auth:{
            user:process.env.USER,
            pass:process.env.PASSWORD
        },
        tls:{rejectUnauthorized:false}
    })

    crypto.randomBytes(32,(err,buffer)=>{
        if(err) res.status(400).json({msg:"token is invalid"})

        const token = buffer.toString("hex")
        User.findOne({email:req.body.email})
        .then(user=>{
            if(!user) return res.status(422).json({msg:"User does not exist with this email"})

            user.resetToken = token;
            user.expireToken = Date.now() +3600000

            user.save()
            .then((result)=>{
                smtpTransport.sendMail({
                    to:user.email,
                    from:'noreply@insta.com',
                    subject:'Reset Password',
                    html:`
                    <h3>You requested for password reset</h3>
                    <h4>Click on this <a href="${process.env.RESET}/reset/${token}">link</a> to reset password.</h4>
                    `
                })
                res.json({msg:"Check your mail."})
            })
        })

    })

}

exports.newPassword = (req,res)=>{
    const newPassword = req.body.password
    const sentToken = req.body.token
    User.findOne({resetToken:sentToken, expireToken:{$gt:Date.now()}})
    .then(user=>{
        if(!user) return res.status(422).json({msg:"User does not exist with this email"})

        //hash password
        bcrypt.hash(newPassword,12)
        .then(hashedPassword=>{
            user.password == hashedPassword
            user.resetToken = undefined
            user.expireToken = undefined
            user.save()
            .then((savedUser)=>{
                res.json({msg:"Password Reset Successfully"})
            })
        })
    })
    .catch(err=>{
        return res.status(500).json({msg:"Something went wrong"})
    })
}