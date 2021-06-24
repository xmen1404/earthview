const NewsModel = require("../models/news.model");

module.exports.createNews = async (req, res) => {
    const {category, title, description, open, body, end} = req.body;

    // simple validation
    let errors = []
    if(!category){
        errors.push("category is required");
    }
    if(!title){
        errors.push("title is required");
    }
    if(!description){
        errors.push("description is required");
    }
    if(!open){
        errors.push("open is required");
    }
    if(!body){
        errors.push("body is required");
    }
    if(!end){
        errors.push("end is required");
    }

    if(errors.length > 0){
        return res.status(400).json({success: false, message: errors});
    }

    try{
        const newNews = new NewsModel({
            user: req.userId,
            category: category,
            title: title,
            description: description,
            open: open,
            body: body, 
            end: end
        });
    
        await newNews.save();

        return res.json({success: true, news: newNews});

    }catch(err){
        console.log(err);
        res.status(500).json({success: false, message: "Internal server error"});
    }
}