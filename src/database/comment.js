
const { default: mongoose } = require("mongoose")

const Comment = require("./models/comment")

const getComments =async ()=>{
  return await Comment.find({})
}

const getComment =async (id)=>{
  return await Comment.find({idVideo:id})
}




const createSchemaComment =async (idVideo)=>{
  
  const newSchemaComment = new Comment({
    idVideo:idVideo,
  });
  const comment = await newSchemaComment.save()
  
  return comment;

}


const createComment =async (idVideo,body)=>{
  let video= await getComment(idVideo)
  if(video.length <=0){
    console.log(17,video,idVideo)
    video =await createSchemaComment(idVideo)
    console.log(34,video,body)

    return  Comment.updateOne({idVideo:idVideo},{$push:{comments:body}}) 
  }else{
    let comentario = video[0].comments
    let comentarios=[...comentario,body]
   console.log(21,comentarios)
    return  Comment.updateOne({idVideo:idVideo},{$set:{comments:comentarios}}) 
  }

 

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
