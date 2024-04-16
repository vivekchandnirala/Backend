const mongoose=require('mongoose');
const loginSchema=new mongoose.Schema({
    user:{
        type:String,
        required:[true,"this field can't be empty"],
        trim:true
    },
    password:{
        type:String,
        required:[true,"this field can't be empty"],
        trim:true
    }
})
const signUpSchema=new mongoose.Schema({
    user:{
        type:String,
        required:[true,"this field can't be empty"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"this field can't be empty"],
        trim:true
    },
    password:{
        type:String,
        required:[true,"this field can't be empty"],
        trim:true
    }
})
const loginModel=mongoose.model('LoginData',loginSchema);
const signUpModel=mongoose.model('SignUpData',signUpSchema);

module.exports={
    loginModel,
    signUpModel
}