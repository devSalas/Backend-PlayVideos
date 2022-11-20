const {Schema, model}= require('mongoose')


const videoSchema=new Schema({
  title:String,
  date: Date,
  comment:Array,
  like:Number,
  url:String,
  owner:String
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
