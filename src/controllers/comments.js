const {CommentModel}=require('../db/models')

const writeComment=async (req,res)=>{
    if(!req.user){
        return res.redirect('/login')
    }
    let obj=req.body
    obj.id=req.params.id
    obj.author=req.user.userName
    const newComment=await CommentModel.create(obj)
    res.redirect('/')
}

const seeComments=async (req,res)=>{

    const allComments=await CommentModel.find({id:req.params.id})
    res.send(allComments) 
}
module.exports={writeComment,seeComments}