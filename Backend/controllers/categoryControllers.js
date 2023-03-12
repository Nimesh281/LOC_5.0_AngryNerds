
const Category  = require("../models/CategoryModel");


const getCategoryImageById =  async (req,res)=>{
    const {category,id}= req.query;
    console.log(category);
    console.log(id)

    const foundcategory = await Category.find({photoGrapherId:id,name:category});

    
    if(foundcategory){
        res.status(201).json(foundcategory);
    }else{
        res.status(404).json("error")
    }



}



module.exports={getCategoryImageById};