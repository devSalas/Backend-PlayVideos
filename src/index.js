if(process.env.NODE_ENV !== 'production') require('dotenv').config()

require("./database/mongo")
const express=require('express')
const morgan= require('morgan')
const v1Router= require('./v1/routers')
const cors=require('cors')


const app= express()


/* middelware */
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/v1",v1Router)





app.use((request,response,next)=>{
  response.status(404).end()
})


const PORT= process.env.PORT

app.listen(PORT, () => {
  console.log('App listening on port 3000!');
});