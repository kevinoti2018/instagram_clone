const mongoose = require('mongoose')
const{objectId} = mongoose.Schema.types
const userSchema = new mongoose.Schema({
    name:{
        type:String, required:true
    },
    email:{
        type:String, required:true
    },
    password:{
        type:String, required:true
    },
    pic:{
        type:String, 
    },
    followers:{[
        type:objectId, ref:"user", ]
    },
    following:{[
        type:objectId, ref:"user",] 
    },
    stories:{[
        user:[type:objectId, ref:"user"],
        storyPic:String,
        storyDate: Date,]
    }
    resetToken:String,
    expireToken:String,

},[timestamps:true])

const User = mongoose.model('User',userSchema)

module.exports = User