const express = require('express')
const router = express.Router()
const xplayController= require('../../controllers/xplayController')
const userController=require('../../controllers/userController')
const commentController=require('../../controllers/commentsController')



router
  
  .get("/",(req,res)=>{
    res.send("home")
  })
  /* videos */
  .get(("/videos"),xplayController.getVideos)

  .post(("/videos"),xplayController.createVideo)
  
  .patch(("/videos/:videoId"),xplayController.updateVideo)

  .delete(("/videos/:videoId"),xplayController.deleteVideo)

  /* usuario  */
  .get(("/users"),userController.getUsers)

  .post(("/user"),userController.createUser)
  
  .patch(("/user/:userId"),userController.updateUser)

  .delete(("/user/:userId"),userController.deleteUser)

  /* commentarios */
  .get(("/comments"),userController.getUsers)

  .post(("/user"),userController.createUser)
  
  .patch(("/user/:userId"),userController.updateUser)

  .delete(("/user/:userId"),userController.deleteUser)


module.exports=router 