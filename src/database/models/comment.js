const { Schema , model } = require("mongoose");
const userComentario= new Schema(
  {
    id:String,
    name: String,
    image: String,
  }
  )

const comentario= new Schema({   
  id:String,
  content:String,
  user:[userComentario]
})

const CommentsVideoSchema = new Schema({
  idVideo:String,
  comments:[comentario]
})
CommentsVideoSchema.set('toJSON',{
  transform:(document,returnedObject)=>{
    returnedObject.id=returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Comment= model("Comentario",CommentsVideoSchema)

module.exports =Comment
