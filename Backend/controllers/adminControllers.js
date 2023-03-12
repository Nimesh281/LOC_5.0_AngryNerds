const asyncHandler = require('express-async-handler');
const Admin = require("../models/adminModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const PhotoGrapher = require("../models/photoGrapherModel");


const register =asyncHandler( async(req,res)=>{
    const{name,email,password,contact,position}=req.body;

    const API_KEY = req.headers.admin_key;
    console.log(API_KEY, req.headers);

    if(API_KEY!==process.env.ADMIN_KEY){
        res.status(400);
        throw new Error("Access Denied");
    }

    if(!name||!email||!password||!contact||!position){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const adminAvailable = await Admin.findOne({email});

    if(adminAvailable){
        res.status(400);
        throw new Error("User Already Registered");
    }
    //hash pass
    const hashedPassword = await bcrypt.hash(password,10);
    console.log("hashed passwoed: ",hashedPassword);

    const newAdmin = await Admin.create({
        name,
        email,
        contact,
        password:hashedPassword,
        position
    })

    if(newAdmin){
        res.status(201).json({_id:newAdmin.id,name:newAdmin.name,email:newAdmin.email,position:newAdmin.position});
    }else{
        res.status(400);
        throw new Error("Invalid Request");
    }

    // res.json("registerd user: ", newUser);
})

const login = asyncHandler( async(req,res)=>{
    const {email,password}=req.body;
    const API_KEY = req.headers.admin_key;


    if(API_KEY!==process.env.ADMIN_KEY){
        res.status(400);
        throw new Error("Access Denied");
    }
    if(!email||!password){
        res.status(400);
        throw new Error("All Fields are mandatory");
    }

    const admin = await Admin.findOne({email});
    //compare password with hashed password


    if(Admin && await bcrypt.compare(password,admin.password)){
        const accessToken = jwt.sign({
            user:{
                username:admin.username,
                email:admin.email,
                _id:admin.id
            }
        },process.env.JWT_SECRET,{expiresIn:"1m"})

        // user.accessToken=accessToken
        res.status(200);
        res.json({admin,accessToken})
    }else{
        res.status(401);
        throw new Error("Email/password invalid")
    }

    res.json("login admin");
})

const verifyPhotographer = asyncHandler(async (req,res)=>{
    const {id} = req.params;
    
    const photographer = PhotoGrapher.findById(id);


    // if(photographer?.isVerified==false){
    //     photographer.isVerified=true;
    // }

    const updatedPhotographer = await PhotoGrapher.findByIdAndUpdate(id,{isVerified:true},{new:true})

    res.status(201).json(updatedPhotographer);
})


// get
const getUnverifiedPhotographers = asyncHandler(async(req,res)=>{
    const photoGraphers = await PhotoGrapher.find({isVerified:false});
    console.log(photoGraphers)

    if(photoGraphers){
        res.status(201).json(photoGraphers);
    }
})
const getAdmin= async (req, res) => {
    try {
        const { id } = req.query;
        console.log(req.query);
        const user = await Admin.findById(id);
        res.status(201).json(user);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports={register,login,verifyPhotographer,getUnverifiedPhotographers,getAdmin};


