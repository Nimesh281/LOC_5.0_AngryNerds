const mongoose = require('mongoose');

const premiumImagesSchema = mongoose.Schema({
    photoGrapherId : {
        type:String,
        required:true,
    },
    images:{
        type:Array,
        default:[]
    }
})


module.exports=mongoose.model("PremiumImages",premiumImagesSchema);