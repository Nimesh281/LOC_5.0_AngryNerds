const asyncHandler = require('express-async-handler');
// const fileUpload = require('express-fileupload');
const PhotoGrapher = require("../models/photoGrapherModel");
const Category = require("../models/CategoryModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cloudinary = require("cloudinary").v2;
const _ = require("underscore");
const {uploadImages, uploadPremiumImages} = require("../helper");
const fs = require("fs");
const PremiumImages = require('../models/PremiumImagesModel');


const register = asyncHandler(async (req, res) => {

    console.log("entry")
    const { name, email, password, contact, avl_Locations, socialLinks, categories, upi, isVerified } = req.body;

    if (!name || !email || !contact || !password || !avl_Locations || !categories) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const photoGrapherAvailable = await PhotoGrapher.findOne({ email });

    if (photoGrapherAvailable) {
        res.status(400);
        throw new Error("Account Already Exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashed passwoed: ", hashedPassword);



    const newPhotoGrapher = await PhotoGrapher.create({
        name,
        email,
        contact,
        password: hashedPassword,
        avl_Locations,
        socialLinks,
        categories,
        upi,
        isVerified: false
    })


    if (newPhotoGrapher) {
        res.status(201).json({ _id: newPhotoGrapher.id, name: newPhotoGrapher.name, email: newPhotoGrapher.email });
    } else {
        res.status(400);
        throw new Error("Invalid Request");
    }

})

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All Fields are mandatory");
    }

    const photoGrapher = await PhotoGrapher.findOne({ email });
    //compare password with hashed password


    if (photoGrapher && await bcrypt.compare(password, photoGrapher.password)) {
        const accessToken = jwt.sign({
            photoGrapher: {
                name: PhotoGrapher.username,
                email: PhotoGrapher.email,
                _id: PhotoGrapher.id
            }
        }, process.env.JWT_SECRET)
        res.status(200);
        res.json({ photoGrapher, accessToken })
    } else {
        res.status(401);
        throw new Error("Email/password invalid")
    }
    res.json("logged in photographer");
})



const getAllPhotgraphers = async(req,res)=>{
    try{
        const data = await PhotoGrapher.find();
        res.status(201).json(data);
    }catch(err){
        console.log(err);
    }
}

 const getPhotoGrapher= async (req, res) => {
    try {
        const { id } = req.query;
        console.log(req.query);
        const user = await PhotoGrapher.findById(id);
        res.status(201).json(user);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}



// upload categorywise photographer images
// const uploadCategoryPhotos = asyncHandler(async (req, res) => {
//     // const type = "wedding";
//     // const photoGrapherId = "640c5124d446c78be051ae17"
//     const { image } = req.files;
//     const { type, photoGrapherId } = req.body;

//     // console.log(req);

//     // If no image submitted, exit
//     if (!image) return res.sendStatus(400);

//     // Move the uploaded image to our upload folder
//     image.mv(__dirname + '/upload/' + image.name);

//     res.sendStatus(200);

//     const response = cloudinary.uploader.upload(__dirname + '/upload/' + image.name, { public_id: `${photoGrapherId}/${type}/${image.name}` })

//     response.then((data) => {
//         console.log(data);
//         console.log(data.secure_url);
//     }).catch((err) => {
//         console.log(err);
//     });


//     // Generate 
//     const url = cloudinary.url("hehe", {
//         width: 100,
//         height: 150,
//         Crop: 'fill'
//     });

//     // The output url
//     console.log(url);
//     // https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag



// })

// const uploadPhoto = asyncHandler(async (req, res) => {

//     const { photoGrapherId } = req.body;
//     const photoGrapher = await PhotoGrapher.findById(photoGrapherId);
//     console.log("org array----------", photoGrapher.images);
//     let single = false;
//     let images;
//     if (req.files.image) {
//         images = req.files.image
//         single = true;
//     } else {
//         images = req.files.images;
//     }


//     if (single) {
//         images.mv(__dirname + '/upload/' + images.name);
//         console.log("image", images)
//         // res.sendStatus(200);

//         const response = cloudinary.v2.uploader.upload(__dirname + '/upload/' + images.name, { public_id: `${photoGrapherId}/random/${images.name}`, async: true })

//         response.then(async (data) => {
//             // console.log(data);
//             console.log("url", data.secure_url);
//             photoGrapher.images.push(data.secure_url)
//             console.log(photoGrapher)
//             const updatedPhotographer = await PhotoGrapher.findByIdAndUpdate(photoGrapherId, { images: photoGrapher?.images }, { new: true })
//            return  res.status(201).json(updatedPhotographer);
//         }).catch((err) => {
//             console.log(err);
//         });
//     } else {
//         // images?.map(async (image) => {

//         //     try {
//         //         image.mv(__dirname + '/upload/' + image.name);
//         //         console.log("image", image)
//         //         const response = await cloudinary.uploader.upload(__dirname + '/upload/' + image.name, { public_id: `${photoGrapherId}/random/${image.name}` })

//         //         if(response){
//         //             console.log(response);
//         //             console.log("url", response.data.secure_url);
//         //             photoGrapher.images.push(response.data.secure_url)
//         //         }
//         //     } catch (error) {
//         //         console.log(error);
//         //     }

//         // })


//         for (let i = 0; i < images.length; i++) {
//             images[i].mv(__dirname + '/upload/' + images[i].name);
//             console.log("image", images[i])
//             const response = cloudinary.uploader.upload(__dirname + '/upload/' + images[i].name, { public_id: `${photoGrapherId}/random/${images[i].name}`,async:true })
//             response.then(async (data) => {
//                 // console.log(data);
//                 console.log("url", data.secure_url);
//                 photoGrapher.images.push(data.secure_url)
//                 console.log(photoGrapher)
                
                
//             }).catch((err) => {
//                 console.log(err);
//             });

//         }
//         const updatedPhotographer = await PhotoGrapher.findByIdAndUpdate(photoGrapherId, { images: photoGrapher?.images }, { new: true })
//         return res.status(201).json(updatedPhotographer);


//     }

//     res.status(404).json("error")



// })



const uploadPhoto = async (req, res, next) => {
    const { photoGrapherId } = req.body;
    const photoGrapher = await PhotoGrapher.findById(photoGrapherId);
    if (!req.files || _.isEmpty(req.files)) {
        return res.status(400)
            .json(vm.ApiResponse(false, 400, "No file uploaded'"))
    }
    const files = req.files;
    console.log(files);
    try {
        let urls = [];
        let multiple = async (path) => await uploadImages(path);
        for (const file of files) {
            let ob = {};
            const {path} = file;
            console.log("path", file);
            ob.path=path;
            ob.photoGrapherId=photoGrapherId;
            ob.type="random"
            ob.filename=file.filename;
            ob.category=null;
            const newPath = await multiple(ob);
            urls.push(newPath);
            fs.unlinkSync(path);
        }
        if (urls) {
            console.log(urls)
            if(photoGrapher.images){
                photoGrapher.images= photoGrapher.images.concat(urls);
            }else{
                photoGrapher.images= urls;
            }       
         
            const updatedPhotographer = await PhotoGrapher.findByIdAndUpdate(photoGrapherId, { images: photoGrapher?.images }, { new: true })
            res.status(201).json(updatedPhotographer);

        }
        if (!urls) {
            return res.status(400)
                .json(vm.ApiResponse(false, 400, ""))
        }

    } catch (e) {
        console.log("err :", e);
        return next(e);
    }
}

const uploadCategoryPhotos = async (req, res, next) => {
    const { photoGrapherId,category } = req.body;
    const photoGrapher = await PhotoGrapher.findById(photoGrapherId);
    let foundcategory = await Category.findOne({photoGrapherId :photoGrapherId })
     if(foundcategory===null){
        const newCategory = await Category.create({
            photoGrapherId,
            name:category,
            images:[]
        });

        foundcategory=newCategory;
     }
    if (!req.files || _.isEmpty(req.files)) {
        return res.status(400)
            .json(vm.ApiResponse(false, 400, "No file uploaded'"))
    }
    const files = req.files;
    console.log(files);
    try {
        let urls = [];
        let multiple = async (path) => await uploadImages(path);
        for (const file of files) {
            let ob = {};
            const {path} = file;
            console.log("path", file);
            ob.path=path;
            ob.photoGrapherId=photoGrapherId;
            ob.type=null
            ob.filename=file.filename;
            ob.category=category;
            const newPath = await multiple(ob);
            urls.push(newPath);
            fs.unlinkSync(path);
        }
        if (urls) {
            console.log(urls)
            if(foundcategory.images){
                foundcategory.images= foundcategory.images.concat(urls);
            }else{
                foundcategory.images= urls;
            }       
         
            const updatedCategory = await Category.findOneAndUpdate({photoGrapherId:photoGrapherId}, { images: foundcategory?.images }, { new: true })
            res.status(201).json(updatedCategory);

        }
        if (!urls) {
            return res.status(400)
                .json(vm.ApiResponse(false, 400, ""))
        }

    } catch (e) {
        console.log("err :", e);
        return next(e);
    }
}


const uploadPremiumPhotos = async (req, res, next) => {
    const { photoGrapherId} = req.body;
    let foundPremium = await PremiumImages.findOne({photoGrapherId :photoGrapherId })
     if(foundPremium===null){
        const newPremium = await PremiumImages.create({
            photoGrapherId,
            images:[]
        });

        foundPremium=newPremium;
     }
    if (!req.files || _.isEmpty(req.files)) {
        return res.status(400)
            .json(vm.ApiResponse(false, 400, "No file uploaded'"))
    }
    const files = req.files;
    console.log(files);
    try {
        let urls = [];
        let multiple = async (path) => await uploadPremiumImages(path);
        for (const file of files) {
            let ob = {};
            const {path} = file;
            console.log("path", file);
            ob.path=path;
            ob.photoGrapherId=photoGrapherId;
            ob.type="Premium"
            ob.filename=file.filename;
            const newPath = await multiple(ob);
            urls.push(newPath);
            fs.unlinkSync(path);
        }
        if (urls) {
            console.log(urls)
            if(foundPremium.images){
                foundPremium.images=foundPremium.images.concat(urls);
            }else{
                foundPremium.images= urls;
            }       
         
            const updatedPremium = await PremiumImages.findOneAndUpdate({photoGrapherId:photoGrapherId}, { images: foundPremium?.images }, { new: true })
            res.status(201).json(updatedPremium);

        }
        if (!urls) {
            return res.status(400)
                .json(vm.ApiResponse(false, 400, ""))
        }

    } catch (e) {
        console.log("err :", e);
        return next(e);
    }
}
module.exports = { register, login, getPhotoGrapher, uploadPhoto, uploadCategoryPhotos,uploadPremiumPhotos,getAllPhotgraphers };