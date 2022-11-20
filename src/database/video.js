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

  const {title,date,comment,like,url,owner}=body
  if( !title || !date ||!comment || !url || !owner ) return 
  
  const newVideo= new Video({
    title,
    date:new Date(),
    comment,
    like,
    url,
    owner,
  })
  
  return newVideo.save()

}



module.exports={
  getVideos,
  createVideo
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