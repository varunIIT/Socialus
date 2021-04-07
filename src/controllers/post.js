const {PostModel}=require('../db/models')

const getPostById=async(id)=>{
    const post=await PostModel.findById(id)
    return post
}
const getAllPost=async (req,res)=>{
    const allPosts=await PostModel.find()
    res.send(allPosts)
}
const createPost=async(req,res)=>{
    const obj=req.body
    if(!req.user){
        return res.redirect('/login')
    }
    obj.author=req.user.userName
    const post=await PostModel.create(obj)
    res.redirect('/')
}
module.exports={
    getPostById,createPost,getAllPost
}