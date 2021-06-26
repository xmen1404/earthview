const NewsModel = require("../models/news.model");

module.exports.createNews = async (req, res) => {
    const {category, title, description, content} = req.body;

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
    if(!content){
        errors.push("open is required");
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
            content: content
        });
    
        await newNews.save();

        return res.json({success: true, news: newNews});

    }catch(err){
        console.log(err);
        res.status(500).json({success: false, message: "Internal server error"});
    }
}

module.exports.getNews = async (req,res) => {
    try{
        const news = await NewsModel.find()
                                    .populate("user", ["username"])
                                    .populate("category", ["name"]);

        return res.json({success: true, news: news });
        
    }catch(err){
        console.log(err);
        res.status(500).json({success: false, message: "Internal server error"});
    }
}