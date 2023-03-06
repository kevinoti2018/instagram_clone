const Post = require('../models/posts')


export.createPost = asyn(req,res)=>{
    const {title,body,pic} = req.body
    if(!title||!body||!pic) {return res.status(400).json({msg:"cannot be empty"})
}
    req.user.password = undefined
    const post = new Post({
        title,
        body,
        photo:pic,
        postedBy:req.user
    })
    post.save.then(result=>{
        res.json(result,{msg:"created post successfully"})
    })
    .catch(err=>{
        return res.status(500).json({msg:err.message})
    })
}

export.getAllPosts = async(req,res)=>{
    await Post.find({})
    .populate("postedBy","_id name pic")
    .populate("comments.postedBy", "_id name pic")
    .sort("createdAt")
    .then((posts)=>{
        res.status(200).json({posts})
    })
    catch(error){
        res.status(500).json({msg:error.message})
    }
}