const mongoose=require('mongoose');

const userSchema=mongoose.Schema({

    name:{type:String,required:true},
    email:{type:String,required:true},
    collegeName:{type:String,required:true},
    dob:{type:Date,required:true},
    gender:{type:String,required:true},
    mobile_no:{type:String,required:true},
    password:{type:String,required:true}
})

module.exports=mongoose.model('User',userSchema);