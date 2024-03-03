const mongoose = require("mongoose")
const CandidateSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,"name is required"],
        Uppercase:true,
    },
    email :{
        type:String,
        trim:true,
        required:[true,"email is required"],
    },
    password :{
        type:Number,
        required:[true,"password is required"],
        minlength:5,
        maxlength:10,
    },
    designation:{
        type:String,
        trim:true,
        required:[true,"designation is required"],
    },
    salary:{
        type:Number,
        required:[true,"salary is required"],
    }
})
const CandidateModel = mongoose.model("CandidateDetails",CandidateSchema)
module.exports = CandidateModel;