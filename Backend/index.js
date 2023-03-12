const express = require('express');
// const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler');
const multer = require("multer");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const {fileURLToPath} = require("url");
const app = express();
const cors = require('cors');


app.use(cors());
// images
// app.use(fileUpload());
app.use(express.static('public'));


const connectDb = require('./config/dbConnection');
const cloudinaryConfig = require('./config/cloudinaryConnection');
dotenv.config();

// cloudinaryConfig();





app.use(express.json());
app.use("/api/user",require("./routes/userroutes.js"));
app.use("/api/photographer",require("./routes/photoGrapherRoutes.js"));
app.use("/api/admin",require("./routes/adminRoutes.js"));
app.use("/api/category",require("./routes/categoryRoutes.js"))
// app.use(errorHandler);


connectDb().then(()=>{
    app.listen(process.env.PORT,()=>console.log(`server running on ${process.env.port}`))
})
