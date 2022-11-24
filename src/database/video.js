/* const {Schema, model}= require('mongoose')


const videoSchema=new Schema({
  titulo:String,
  fecha: Date,
  comentario:Array,
  subscritos:Number,
  like:Number
})


const Video = model("Video",videoSchema)
 */

const { default: mongoose } = require("mongoose")
const Video= require("./models/video")

const getVideos =async ()=>{

  return await Video.find({})

}
const createVideo =async (body)=>{

  const {title,date,comments,like,url,user,img,dislike}=body
  if( !title ||!comments || !url || !user ) return 
  
  const newVideo= new Video({
    title,
    url,
    img,
    user,
    dislike,
    like,
    date:new Date(),
    comments:[]


  })
  
  return newVideo.save()

}
const deleteVideo =async (videoId)=>{
  console.log(videoId,46)
  return Video.findByIdAndDelete(videoId)  
}
const updateVideo =async (videoId,body)=>{

  console.log("llego aqui,51")
  return Video.findByIdAndUpdate(videoId,body)

}



module.exports={
  getVideos,
  createVideo,
  deleteVideo,
  updateVideo 
}

/* Video.find({})
.then(res=>{
  console.log(res)
  mongoose.connection.close()
  })

 const video= new Video({
  titulo:"video ramdon",
  fecha:new Date(),
  comentario:["esto es una preuba","este juego no vale la pena"],
  subscritos:20
})

video.save()
  .then(result=>{
    console.log(result)
    mongoose.connection.close()
  })
  .catch(err=>{
    console.log(err)
  }) */