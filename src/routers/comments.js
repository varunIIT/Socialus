const { writeComment, seeComments } = require('../controllers/comments')
const commentRoute=require('express').Router()

commentRoute.get('/seeComments/:id',async (req,res)=>{
    seeComments(req,res)
})
commentRoute.post('/writeComment/:id',async (req,res)=>{
    writeComment(req,res)
})

module.exports={
    commentRoute
}