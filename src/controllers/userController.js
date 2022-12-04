const databaseUser = require("../database/user")



const getUsers=async (req,res)=>{
  const Users= await databaseUser.getUsers();
  if(Users.length==0){
    res.json({"message":"no se encontro video"})
  }else{
      res.json(Users)
  }
}

const getUser=async (req,res)=>{
  const {userId} = req.params
  console.log(userId)
  const User= await databaseUser.getUser(userId);
  if(User.length==0){
    res.json({"message":"no se encontro video"})
  }else{
      res.json(User)
  }
}


const createUser=async (req,res)=>{

  console.log(req.body,15)
  const User= await databaseUser.createUser(req.body);
  console.log(User,17)

  res.json(User)

}

const  updateUser=async(req,res)=>{
  const {body} = req
  const {userId}=req.params
  /* console.log(req.body) */

  const user= await databaseUser.updateUser(userId,body)

  res.json(user)

}
const deleteUser=async(req,res)=>{
  const {userId}=req.params
  const user= await databaseUser.deleteUser(userId);
  res.json(user) 

}




module.exports={
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser
}