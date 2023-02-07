const express = require('express')
const app = express()
// const connectDB = require('./config/connetDB')
const port = 3500
const cors = require('cors')
const env = require('dotenv')
env.config()
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

mongoose.set('strictQuery', false)
mongoose.connect(process.env.Mongo_uri)
mongoose.connection.on('connected',()=>{
    console.log('connected to database');
})
mongoose.connection.on('error',()=>{
    console.log('not connected',err);
})
app.listen(port,()=>{
    console.log('app is running');
})