const postRoute=require('express').Router()
const {PostModel, CommentModel}=require('../db/models')
const {getPostById, createPost, getAllPost}=require('../controllers/post')

postRoute.get('/',async (req,res)=>{
    getAllPost(req,res)
})
postRoute.post('/',async (req,res)=>{
    createPost(req,res)
})
postRoute.get('/:id',async (req,res)=>{
    try{
        const post=await getPostById(req.params.id)
    res.send(post)
    }
    catch(err){
        console.log(err)
    }
})
postRoute.get('/my/posts',async (req,res)=>{
    
    if(!req.user){
        return res.send(null)
    }
    const myPosts=await PostModel.find({author:req.user.userName})
    res.send(myPosts)

})
postRoute.post('/delete/:id',async (req,res)=>{
    await PostModel.deleteOne({_id:req.params.id})
    await CommentModel.deleteMany({id:req.params.id})
    res.redirect('/')
})
module.exports={
    postRoute
}