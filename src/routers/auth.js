const { UserModel } = require('../db/models')
const {passport}=require('../passport-setup')

const authRoute=require('express').Router()


authRoute.get('/signup',(req,res)=>{
    res.render('signup')
})
authRoute.post('/signup',async (req,res)=>{
    try{
        let obj={
            userName:req.body.username,
            firstName:req.body.firstname,
            lastName:req.body.lastname,
            email:req.body.email,
            password:req.body.password
        }

        const op1=await UserModel.findOne({userName:req.body.username})
        //console.log(op1)

        if(op1){
            return res.render('signup',{error:'This username already exists!'})
        }

        const op2=await UserModel.findOne({email:req.body.email})
        if(op2){
            return res.render('signup',{error:'This email-id already exists!'})
        }

        const user=await UserModel.create(obj)
    }catch(err){
        console.log(err)  
    }
    res.redirect('/login')
})
authRoute.get('/login',(req,res)=>{
    res.render('login',{error:req.flash('error')})
})
authRoute.post('/login',passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash:true

  }))
  authRoute.get('/logout',(req,res)=>{
      req.logout()
      res.redirect('/')
  })
module.exports={authRoute}