const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"User Name is mandatory"]
    },
    email:{
        type:String,
        rquired:[true,"Email Address is mandatory"],
        unique:[true,"Email Already Registered"]
    },
    contact:{
        type:String,
         required:[true,"Contact detials are required"]
    },
    password:{
        type:String,
        required:[true,"Password is mandatory"]
    },
    picturepath:{
        type:String,
    }
},{
    timestamps:true,
})

module.exports=mongoose.model("user",userSchema);