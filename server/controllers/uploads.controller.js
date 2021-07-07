const ImageModel = require("../models/image.model");
// const fs = require('fs');

module.exports.uploadImage = async (req, res) => {
    try{
        // console.log("debug req", req);

        // const img = fs.readFileSync(req.files[0].path.replace("\\","/"));
        // const encode_image = img.toString('base64');
        // Define a JSONobject for the image attributes for saving to database

        // console.log("i am in here");

        // const finalImg = new ImageModel({
        //     contentType: req.files[0].mimetype,
        //     image:  new Buffer.from(encode_image, 'base64')
        // });

        // await finalImg.save();

        // console.log('saved to database')
        // console.log(localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME));
        
        // return res.json({uploaded: true, url: "http://localhost:5000/" + req.files[0].path.replace("\\","/")});
        return res.json({uploaded: true, url: "http://localhost:5000/" + req.files[0].filename});

        // return res.json({success: true, image: finalImg});

    }catch(err){
        console.log(err);
        res.status(500).json({success: false, message: "Internal server error"});
    }
}
