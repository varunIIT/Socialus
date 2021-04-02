const postRoute=require('express').Router()
const {PostModel, CommentModel}=require('../db/models')
const {getPostById}=require('../controllers/post')

postRoute.get('/',async (req,res)=>{
    const allPosts=await PostModel.find()
    res.send(allPosts)
})
postRoute.post('/',async (req,res)=>{
    //console.log(req.body)
    // console.log(2)
    const obj=req.body
    if(!req.user){
        return res.redirect('/login')
    }
    obj.author=req.user.userName
    const post=await PostModel.create(obj)
    res.redirect('/')
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