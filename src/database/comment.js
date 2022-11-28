
const { default: mongoose } = require("mongoose")

const Comment = require("./models/comment")

const getComments =async ()=>{

  return await Comment.find({})

}



const createComment =async (body)=>{

  const {idVideo, comments} = body
    if(!idVideo ) return 
  
  const newComment= new Comment({
    idVideo,
    comments
  })
  
  return newComment.save()

}


const deleteComment =async (userId)=>{
  console.log(userId)
  return Comment.findByIdAndDelete(userId)  
}


const updateComment =async (userId,body)=>{

  console.log("llego aqui,51")
  return Comment.findByIdAndUpdate(userId,body)

}



module.exports={
  getComments,
  createComment,
  deleteComment,
  updateComment 
}
