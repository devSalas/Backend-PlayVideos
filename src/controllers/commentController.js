const databaseComment = require("../database/comment")



const getComments=async (req,res)=>{
  const comments= await databaseComment.getComments();
  if(comments.length==0){
    res.json({"message":"no se encontro video"})
  }else{
      res.json(comments)
  }
}


const createComment=async (req,res)=>{

  console.log(req.body,15)
  const comment= await databaseComment.createComment(req.body);

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
  createComment,
  deleteComment,
  updateComment
}