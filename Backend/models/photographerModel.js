const mongoose = require('mongoose');
const Category = require("./CategoryModel") 

const photoGrapherSchema = mongoose.Schema({
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
        rquired:[true,"Contact is mandatory"],
    },
    password:{
        type:String,
        required:[true,"Password is mandatory"]
    },
    avl_Locations :{
        type:Array,
        default:[],
        required:[true,"Your Available Locations are mandatory"]
    },
    socialLinks : {
        type:Map,
        of:String,
        required:[true,"Social Links are mandatory"]
    },
    upi :{
        type: String,
    },
    categories : {
        type :Array,
        default:[],
    },
    images:{
        type:Array,
        default:[],
    },
    isVerified:{
        type:Boolean,
    },
    picturePath:{
        type:String,
    }

},{
    timestamps:true,
})

module.exports=mongoose.model("PhotoGrapher",photoGrapherSchema);