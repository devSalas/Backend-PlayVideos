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


const createVideo=async(req,res)=>{
  console.log(req.body,15)
  const Video= await databaseVideo.createVideo(req.body);
  console.log(Video,17)
/*   if(typeof(Video)!='array'){
    res.json({"message":"ocurrio un error"})
  }else{ */
  res.json(Video)
  
 /*  } */
}




module.exports={
  getVideos,
  createVideo
}