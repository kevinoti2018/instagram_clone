const express = require('express')
const app = express()
const authRouter = require('./routes/auth/auth')
const connectDB = require('./config/connetDB')

const port = 3500
const cors = require('cors')
const env = require('dotenv')
env.config()


app.use(cors())
app.use(express.json())
// call routes
app.use('/api',authRouter)

connectDB()
app.listen(port,()=>{
    console.log('app is running');
})