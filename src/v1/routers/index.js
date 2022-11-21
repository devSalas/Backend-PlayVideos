const express = require('express')
const router = express.Router()
const xplayController= require('../../controllers/xplayController')



router
  .get(("/videos"),xplayController.getVideos)

  .post(("/videos"),xplayController.createVideo)
  
  .del(("/videos/:videoId"),xplayController.deleteVideo)

  


module.exports=router 