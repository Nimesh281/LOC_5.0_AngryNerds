const cloudinary = require("cloudinary");
const _ = require('underscore');

const fs = require('fs');
const FormData = require('form-data');
var picpurifyUrl = 'https://www.picpurify.com/analyse/1.1';





function uploadImages(file) {
    console.log(
        "file---------", file);
    var imagePath = file.path
    const form = new FormData();
    const stats = fs.statSync(imagePath);
    const file2 = fs.createReadStream(imagePath);
    form.append('file_image', file2, { knownLength: stats.size });
    form.append('API_KEY', 'rXTmeXCzKFMlzHZEJS4hXXb51ZAfQ8Ds');
    form.append('task', 'porn_moderation,drug_moderation,gore_moderation,drug_moderation');
    form.append('origin_id', "xxxxxxxxx");
    form.append('reference_id', "yyyyyyyy");

    fetch(picpurifyUrl, {
        method: 'POST',
        body: form
    }).then((response) => {
        return response.json();
    }).then((json) => {
        console.log(json);
    }).catch((error) => {
        console.log(error.message);
    })





    cloudinary.config({
        cloud_name: "dr07lzbug",
        api_key: "699398384514582",
        api_secret: "nqN1O0PA5W6BR7iBLX24_D0d5hU"
    });

    return new Q.Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload(file.path, { public_id: `${file.photoGrapherId}/${file.type == "random" ? file.type : file.category}/${file.filename}` }, (err, res) => {
            if (err) {
                console.log('cloudinary err:', err);
                reject(err);
            } else {
                console.log('cloudinary res:', res);
                return resolve(res.url);
            }
        });
    });
};


function uploadPremiumImages(file) {
    console.log(
        "file---------", file);
    cloudinary.config({
        cloud_name: "dr07lzbug",
        api_key: "699398384514582",
        api_secret: "nqN1O0PA5W6BR7iBLX24_D0d5hU"
    });

    return new Q.Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload(file.path, { public_id: `${file.photoGrapherId}/${file.type}/${file.filename}`, width: 50, height: 50 }, (err, res) => {
            if (err) {
                console.log('cloudinary err:', err);
                reject(err);
            } else {
                console.log('cloudinary res:', res);
                return resolve(res.url);
            }
        });
    });
}


module.exports = { uploadImages, uploadPremiumImages };
