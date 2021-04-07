const {UserModel}=require('../db/models')
const {getUserById}=require('../controllers/users')

const userRoute=require('express').Router()

userRoute.get('/currentUser',async (req,res)=>{
    res.send(req.user)
})

userRoute.post('/',async (req,res)=>{
   const user=req.user ? req.user.userName:'User'
    res.send(user)
})

module.exports={
    userRoute
}