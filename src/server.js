const express=require('express')
const app=express()
const port=process.env.PORT||3000
const expressSession=require('express-session')
const flash=require('connect-flash')
const {passport}=require('./passport-setup')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','hbs')


require('./db/conn')

app.use(
   expressSession({
      resave: true,
      saveUninitialized: true,
      secret: '24knb6k247b2k7b2k7bk247hb2kh7b2',
    })
  )
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

const { postRoute}= require('./routers/posts')
const {userRoute}=require('./routers/users')
const {commentRoute}=require('./routers/comments')
const { authRoute } = require('./routers/auth')


app.post('/post',(req,res,next)=>{
  if(!req.user){
    console.log(1)
      return res.render('login')
  }
  next()

})
app.use('/post',postRoute)
app.use('/user',userRoute)
app.use('/comment',commentRoute)




app.use('/',express.static(__dirname+'/public'))
app.use('/',authRoute)






app.listen(port,()=>{
    console.log(`listening at http://localhost:${port}`)
})
