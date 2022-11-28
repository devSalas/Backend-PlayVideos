
const { default: mongoose } = require("mongoose")

const User= require("./models/User")

const getUsers =async ()=>{

  return await User.find({})

}



const createUser =async (body)=>{

  const {name,subscribed,img} = body
    if(!name ) return 
  
  const newUser= new User({
    name,
    subscribed,
    img,
    date:new Date(),
  })
  
  return newUser.save()

}


const deleteUser =async (userId)=>{
  console.log(userId)
  return User.findByIdAndDelete(userId)  
}


const updateUser =async (userId,body)=>{

  console.log("llego aqui,51")
  return User.findByIdAndUpdate(userId,body)

}



module.exports={
  getUsers,
  createUser,
  deleteUser,
  updateUser 
}
