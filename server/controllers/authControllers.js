const User = require('../models/User')
const bcypt = require('bcrypt')
const {createAccessToken,createRefreshToken} = require('../middleware/token')
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
        const salt = bcrypt.gensalt(10)
        const hashedpassword = await bcrypt.hash(password,salt)
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
        path:'/api/refresh_token'
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
        const refresh_token = req cookies.refreshToken
        if(!refresh_token){
            return res.status(400).json({msg: 'please login now'})
        }
        JsonWeTokenError.verify(refresh_token,process.env.REFRESH_TOKEN_SECRET, async(err,result){
            if(err){
                return res.status(400).json({msg: 'please login now'})
                const user = await User.findById(result.id).select('password')
                .populate("_id name pic followers followung")

                if(!user){
                    return res.status(400).json({msg: 'user does not exist'})
                }
                const access_token = createAccessToken(id:result.id)
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