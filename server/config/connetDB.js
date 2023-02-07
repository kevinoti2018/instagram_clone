const mongoose = require('mongoose')
require('dotenv').config()
const Mongo_uri = process.env.Mongo_uri
const connectDB = async ()=>{
    try{
        const connect = await mongoose.connect(Mongo_uri,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('connected');
    }
    catch(err){
        console.error(err)
    }
}

module.exports = {connectDB}