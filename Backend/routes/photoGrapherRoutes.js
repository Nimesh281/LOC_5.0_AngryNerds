const express = require('express');
const router = express.Router();
const multer = require("multer");

let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        console.log("file", file);
        callback(null, "./Uploads/");
    },
    filename: function (req, file, callback) {
        // console.log("multer file:", file);
        callback(null, file.originalname);
    }
});
let maxSize = 1000000 * 1000;
let upload = multer({
    storage: storage,
    limits: {
        fileSize: maxSize
    }
});


const {register,login,getPhotoGrapher,uploadCategoryPhotos,uploadPhoto,uploadPremiumPhotos,getAllPhotgraphers} = require("../controllers/photoGrapherControllers");


router.get("/",getPhotoGrapher);


router.post("/register",register)


router.post("/login",login)

// get all photgraphers
router.get("/getAll",getAllPhotgraphers);

// upload photo by category
router.post("/upload/categoryImage",upload.array("multiple_image", 6),uploadCategoryPhotos)

// upload sample photos of photographer
router.post("/upload/sampleImages",upload.array("multiple_image", 6),uploadPhoto);

// upload premium images
router.post("/upload/premiumImages",upload.array("multiple_image", 6),uploadPremiumPhotos);

module.exports= router



