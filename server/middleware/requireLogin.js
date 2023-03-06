const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('doten').config()

const requireLogin = async(req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        if(!token) return res.status(400).json({msg"Invalid Authorisation"})

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        if(!decoded) return res.status(400).json({msg"Invalid Authorisation"})

        const user = await User.findOne({_id:decoded.id})
        req.user = user
        next()
    }
    catch(error){
        return res.status(400).json({msg:"Not authorized or expired token, try again"})
    }
}

module.exports = requireLogin