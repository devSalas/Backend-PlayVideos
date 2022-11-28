const {Schema, model}= require('mongoose')


const videoSchema=new Schema({
  title:String,
  like:Number,
  dislike:Number,
  idUser:String,
  img:String,
  category:Array,
  url:String,
  date:Date

})



videoSchema.set('toJSON',{
  transform:(document,returnedObject)=>{
    returnedObject.id=returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})



const Video = model("Video",videoSchema)

module.exports = Video
