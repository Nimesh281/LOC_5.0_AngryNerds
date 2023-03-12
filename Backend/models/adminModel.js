const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({

    name:{
        type:String,
        required:[true,"Name is required"],
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"Email Already Registered"]
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    contact :{
        type : String,
        required:true,
    },
    position:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
})


module.exports=mongoose.model("Admin",adminSchema);