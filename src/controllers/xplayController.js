const databaseVideo = require("../database/video")

const getVideos=async (req,res)=>{
  const Videos= await databaseVideo.getVideos();
  console.log(Videos,5)
  if(Videos.length==0){
    res.json({"message":"no se encontro video"})
  }else{
      res.json(Videos)
  }
}


const createVideo=async (req,res)=>{

  console.log(req.body,15)
  const Video= await databaseVideo.createVideo(req.body);
  console.log(Video,17)

  res.json(Video)

}
const  updateVideo=async(req,res)=>{
  const {body} = req
  const {videoId}=req.params
  /* console.log(req.body) */

  const Video= await databaseVideo.updateVideo(videoId,body)

  res.json(Video)

}
const deleteVideo=async(req,res)=>{

  console.log(videoId,35)
  const {videoId}=req.params
  const Video= await databaseVideo.deleteVideo(videoId);
  res.json(Video) 

}




module.exports={
  getVideos,
  createVideo,
  deleteVideo,
  updateVideo
}