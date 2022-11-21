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
  if( !title || !date ||!comments || !url || !user ) return 
  
  const newVideo= new Video({
    title,
    url,
    img,
    user,
    dislike,
    like,
    date:new Date(),
    comments:[]

    /* 
    {"_id":{"$oid":"637b93fe3d65ebcb1d40bd5a"},
    "title":"la tranquilidad de la rana",

    "url":"https://res.cloudinary.com/dzlog8uxo/video/upload/v1668809492/dev/Rana_hoof1v.mp4",
    "img":""
    ,"user":{"name":"alvaro","image":"https://avatars.githubusercontent.com/u/72365664?v=4","id":"2","subscribers":{"$numberInt":"0"}},
    "like":{"$numberInt":"20"},
    "dislike":{"$numberInt":"30"},
    "date":"",
    "comments":[
      {"id":"2","user":{"id":"1","name":"Gerson","image":"https://avatars.githubusercontent.com/u/100030169?v=4"},
      "content":"buen video sigue asi, y llegaras a trabajar en faceboo,k","date":"21-11-22"}]} */

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