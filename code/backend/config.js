const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/complaintdb")
.then(()=>{
   console.log("connected to mongodb")
})