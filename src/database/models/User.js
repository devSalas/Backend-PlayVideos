const {Schema,model} = require('mongoose')

const UserSchema = new Schema({
  name:String,
  img:String,
  subscribed:Number
})


UserSchema.set('toJSON',{
  transform:(document,returnedObject)=>{
    returnedObject.id=returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})
const User = model("User",UserSchema)

module.exports = User