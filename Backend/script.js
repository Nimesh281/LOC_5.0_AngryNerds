const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const port = 3000;

// Use the express-fileupload middleware
app.use(fileUpload());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/upload', (req, res) => {
    // Log the files to the console
    // console.log(req.files);

    // // All good
    // res.sendStatus(200);
    // res.end();
    const { image } = req.files;

    // If no image submitted, exit
    if (!image) return res.sendStatus(400);

    // Move the uploaded image to our upload folder
    image.mv(__dirname + '/upload/' + image.name);

    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});