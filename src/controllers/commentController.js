const databaseComment = require("../database/comment")



const getComments=async (req,res)=>{
  const comments= await databaseComment.getComments();
  if(comments.length==0){
    res.json({"message":"no se encontro video"})
  }else{
      res.json(comments)
  }
}
const getComment=async (req,res)=>{
  const {commentId}=req.params
  const comment= await databaseComment.getComment(commentId);
  if(comment.length==0){
    res.json({"message":"no se encontro video"})
  }else{
      res.json(comment)
  }
}


const createComment=async (req,res)=>{
  const {videoId}=req.params
  const {body}=req
  const comment= await databaseComment.createComment(videoId,body);
  console.log(comment);
  res.json(comment)

}

const  updateComment=async(req,res)=>{
  const {body} = req
  const {userId}=req.params

  const comment= await databaseComment.updateComment(userId,body)

  res.json(comment)

}
const deleteComment=async(req,res)=>{
  const {userId}=req.params
  const comment= await databaseComment.deleteComment(userId);
  res.json(comment) 

}




module.exports={
  getComments,
  getComment,
  createComment,
  deleteComment,
  updateComment
}