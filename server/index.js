const express = require('express')
const app = express()
const authRouter = require('./routes/auth/auth')
// const connectDB = require('./config/connetDB')
const port = 3500
const cors = require('cors')
const env = require('dotenv')
env.config()
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())
// call routes
app.use('/api',authRouter)

mongoose.set('strictQuery', false)
mongoose.connect(process.env.Mongo_uri)
mongoose.connection.on('connected',()=>{
    console.log('connected to database');
})
mongoose.connection.on('error',()=>{
    console.log('not connected',error);
})
app.listen(port,()=>{
    console.log('app is running');
})