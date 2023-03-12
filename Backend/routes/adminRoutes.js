const express = require('express');
const router = express.Router();

const {login,register,verifyPhotographer,getUnverifiedPhotographers,getAdmin} = require("../controllers/adminControllers");


router.post("/login",login);

router.post("/register",register);


router.get("/",getAdmin);

// get unverified photographers

router.get("/photographes/unverifed",getUnverifiedPhotographers);

// verify photographer by id
router.patch("/verify/:id",verifyPhotographer);















module.exports= router