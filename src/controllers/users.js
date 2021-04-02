const {UserModel}=require('../db/models')



const getUserById=async (id)=>{
    const user=await UserModel.findById(id)
    return user

}


module.exports={
    getUserById
}
