
const { default: mongoose } = require("mongoose")

const Comment = require("./models/comment")

const getComments =async ()=>{
  return await Comment.find({})
}

const getComment =async (id)=>{
  return await Comment.find({idVideo:id})
}


const createComment =async (idVideo,body)=>{
  let video= await getComment(idVideo)

    /* console.log(video[0].comments) */
    let comentario = video[0].comments
   let comentarios=[...comentario,body]
  console.log(21,comentarios)
  return  Comment.updateOne({idVideo:idVideo},{$set:{comments:comentarios}})

}
/* createComment("63842664d616d6888a56467b") */
/* const createComment =async (idVideo,body)=>{

  const {idVideo, comments} = body
    if(!idVideo ) return 
  
  const newComment= new Comment({
    idVideo,
    comments
  })
  
  return newComment.save()

} */


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
  getComment,
  createComment,
  deleteComment,
  updateComment 
}
