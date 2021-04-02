const {PostModel}=require('../db/models')

const getPostById=async(id)=>{
    const post=await PostModel.findById(id)
    return post
}

module.exports={
    getPostById
}