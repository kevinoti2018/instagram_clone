const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
// const bcrypt = require('bcrypt')
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
    followers:[{
        type:ObjectId, ref:"User"
    }],
    following:[{
        type:ObjectId, ref:"User"
    }],
    stories:[{
        user:{type:ObjectId, ref:"User"},
        storyPic:String,
        storyDate:Date
    }],
    resetToken:String,
    expireToken:String
},{timestamps:true})

    // userSchema.pre('save', async function(next){
    //     if(!this.isModified('password')){
    //         next();
    //     }
    
    //     const salt = await bcrypt.genSalt(10)
    //     this.password= await bcrypt.hash(this.password,salt);
    // })

    // userSchema.methods.matchPassword = async function (enteredPassword) {
    //     return await bcrypt.compare(enteredPassword, this.password);
    //   };
    

const User = mongoose.model('User',userSchema)

module.exports = User