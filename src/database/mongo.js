const mongoose = require('mongoose')

const connectionString=`mongodb+srv://esteban:9mka6pw0IpMUW8hN@cluster0.sg2d9.mongodb.net/DBplay?retryWrites=true&w=majority`

mongoose.connect(connectionString)
/* .then(res=>console.log("todo salio bien"))
.catch(err=>console.log("mal")) */



