const express = require('express')
const router = express.Router()
const xplayController= require('../../controllers/xplayController')
const userController=require('../../controllers/userController')
const commentController=require('../../controllers/commentController')



router
  
  .get("/",(req,res)=>{
    res.send("home")
  })
  /* videos */
  .get(("/videos"),xplayController.getVideos)
  
  .get(("/videos/:videoId"),xplayController.getVideo)

  .post(("/videos"),xplayController.createVideo)
  
  .patch(("/videos/:videoId"),xplayController.updateVideo)

  .delete(("/videos/:videoId"),xplayController.deleteVideo)

  /* usuario  */
  .get(("/users"),userController.getUsers)
  
  .get(("/users/:userId"),userController.getUser)

  .post(("/user"),userController.createUser)
  
  .patch(("/user/:userId"),userController.updateUser)

  .delete(("/user/:userId"),userController.deleteUser)

  /* commentarios */
  .get(("/comments"),commentController.getComments)
  
  .get(("/comments/:commentId"),commentController.getComment)

  .post(("/comment"),commentController.createComment)
  
  .patch(("/comment/:commentId"),commentController.updateComment)

  .delete(("/comment/:commentId"),commentController.deleteComment)


module.exports=router 