const {CommentModel}=require('../db/models')
const commentRoute=require('express').Router()

commentRoute.get('/seeComments/:id',async (req,res)=>{
    const allComments=await CommentModel.find({id:req.params.id})
    res.send(allComments) 
})
commentRoute.post('/writeComment/:id',async (req,res)=>{
    if(!req.user){
        return res.redirect('/login')
    }
    let obj=req.body
    obj.id=req.params.id
    obj.author=req.user.userName
    const newComment=await CommentModel.create(obj)
    res.redirect('/')
})

module.exports={
    commentRoute
}