const express = require('express')
const router = express.Router()
const xplayController= require('../../controllers/xplayController')



router
  .get(("/videos"),xplayController.getVideos)
  
  .post(("/videos"),xplayController.createVideo)
  
  

module.exports=router 