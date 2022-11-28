const { Schema , model } = require("mongoose");

const CommentsVideoSchema = new Schema({
  idVideo:String,
  comments:[
    {
    id:String,
    user:String,
    img:String,
    text:String
    }
  ]


})
CommentsVideoSchema.set('toJSON',{
  transform:(document,returnedObject)=>{
    returnedObject.id=returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Comment= model("Comentario",CommentsVideoSchema)

module.exports = Comment

