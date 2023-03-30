const express = require('express')
const postRouter = express.Router()
const {createPost,getAllPosts} = require('../../controllers/postController')
const requireLogin = require ('../../middleware/requireLogin')

postRouter.post('/createPost',requireLogin,createPost)
postRouter.get('/allPost',requireLogin,getAllPosts)


module.exports= postRouter

