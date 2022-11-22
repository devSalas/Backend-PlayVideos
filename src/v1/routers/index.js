const express = require('express')
const router = express.Router()
const xplayController= require('../../controllers/xplayController')



router
  
  .get("/",(req,res)=>{
    res.send("home")
  })

  .get(("/videos"),xplayController.getVideos)

  .post(("/videos"),xplayController.createVideo)
  
  .patch(("/videos/:videoId"),xplayController.updateVideo)

  .delete(("/videos/:videoId"),xplayController.deleteVideo)

module.exports=router 