const mongoose=require('mongoose')
const Schema=mongoose.Schema
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10;

const postSchema=new Schema({
    author:{
        type:String,
        required:true,
        trim:true
    },
    title:{
        type:String,
        required:true,
        trim:true
    },
    body:{
        type:String,
        required:true,
        trim:true
    },
})

const commentSchema=new Schema({
    author:{
        type:String,
        required:true,
        trim:true
    },
    body:{
        type:String,
        required:true,
        trim:true
    },
    id:{
        type:String,
        required:true,
        trim:true

    }

})
const userSchema=new Schema({
    userName:{
        type:String,
        required:true,
        unique: true,
        trim:true
    },
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true, 
        unique: true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true
    },

})

userSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});


const UserModel=mongoose.model('UserModel',userSchema)
const PostModel=mongoose.model('PostModel',postSchema)
const CommentModel=mongoose.model('CommentModel',commentSchema)


module.exports={PostModel,CommentModel,UserModel}