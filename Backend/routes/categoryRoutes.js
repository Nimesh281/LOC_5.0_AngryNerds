const express = require('express');
const router = express.Router();

const {getCategoryImageById} = require("../controllers/categoryControllers.js");


router.get("/imageByCategory/" , getCategoryImageById);


module.exports = router