const NewsModel = require("../models/news.model");

module.exports.createNews = async (req, res) => {
    const {category, type, title, background, content, date} = req.body;

    // simple validation
    let errors = []
    if(!category){
        errors.push("category is required");
    }
    if(!type){
        errors.push("type is required");
    }
    if(!title){
        errors.push("title is required");
    }
    if(!background){
        errors.push("background is required");
    }
    if(!content){
        errors.push("content is required");
    }

    if(errors.length > 0){
        return res.status(400).json({success: false, message: errors});
    }

    try{
        // const path = req.file.path.replace(/\\/g, "/");
        // const backgroundPath = "http://localhost:5000/" + path;


        const newNews = new NewsModel({
            user: req.userId,
            category: category,
            type: type,
            title: title,
            background: background,
            content: content,
            date: date
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
                                    .populate("category", ["name"])
                                    .populate("type", ["name"]);

        return res.json({success: true, news: news });
        
    }catch(err){
        console.log(err);
        res.status(500).json({success: false, message: "Internal server error"});
    }
}

module.exports.getNewsById = async (req, res) => {
    try{
        const condition = {_id: req.params.id, user: req.userId};
        const news = await NewsModel.findOne(condition)
                                    .populate("user", ["username"])
                                    .populate("category", ["name"])
                                    .populate("type", ["name"]);

        if(!news){
            res.status(401).json({"success": false, "message": "news not found or user is not autherized"})
        }

        res.json({"success": true, news: news});

    }catch(err){
        console.log(err);
        res.status(500).json({"success": false, "message": "Internal server error"});
    }
}