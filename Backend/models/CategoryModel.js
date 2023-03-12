const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    photoGrapherId : {
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    images:{
        type:Array,
        default:[]
    }
})


module.exports=mongoose.model("Category",categorySchema);