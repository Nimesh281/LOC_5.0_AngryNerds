const cloudinary = require("cloudinary").v2;


// configuration
const cloudinaryConfig =()=> cloudinary.config({
    cloud_name: "dr07lzbug",
    api_key: "699398384514582",
    api_secret: "nqN1O0PA5W6BR7iBLX24_D0d5hU"
  });


module.exports=cloudinaryConfig;