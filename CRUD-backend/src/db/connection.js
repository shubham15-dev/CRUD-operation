const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/Candidate")
.then(()=>{
    console.log("connect to database successfully")
})
.catch((err)=>{
    console.log("error while connect to database",err)
})