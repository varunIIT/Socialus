const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Users=require('./db/models').UserModel
const bcrypt=require('bcrypt')
passport.use(
  new LocalStrategy({ passReqToCallback : true },async function (req,username, password, done) {
    try {
      const user = await Users.findOne({
        userName:username
      })

      if (!user) {
        
        // no user with that username found
        return done(null, false,req.flash('error','Invalid Username!'))
      }
      const isMatch=await bcrypt.compare(password,user.password)
      //console.log(isMatch)
      if (!isMatch) {
       
        // wrong password provided
        return done(null, false,req.flash('error','Wrong Password!'))
      }
    
      done(null, user)
    } catch (err) {
      // if error during db operation
      done(err)
    }
  })
)
passport.serializeUser (function (user, done) {
  // console.log(user)
  // console.log(user._id)
  // console.log(user.id)
  done(null, user.id)
})

passport.deserializeUser (async function (userId, done) {
  try {
    const user = await Users.findById(userId)
    if (user) 
      return done(null, user)
    else 
      throw new Error('Could not deserialise User')
  } catch (err) {
    done(err)
  }
})

module.exports = { passport }