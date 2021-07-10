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
        const news = await NewsModel.find().sort({ _id: -1 })
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



module.exports.updateNews = async (req, res)=>{
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

    // tạo news mới và đẩy vào db
    try{
        let updatedNews = {
            user: req.userId,
            category: category,
            type: type,
            title: title,
            background: background,
            content: content,
            date: date
        };


        const newsUpdateCondition = {_id: req.params.id};


        updatedNews = await NewsModel.findOneAndUpdate(newsUpdateCondition, updatedNews, {new: true});

        // Kiểm tra xem update có thành công không
        if(!updatedNews){
            res.status(401).json({"success": false, "message": "News not found"})
        }

        res.json({"success": true, "news": updatedNews});


    }catch(err){
        console.log(err);
        res.status(500).json({"success": false, "message": "Internal server error"});
    }   
}




module.exports.deleteNews = async (req,res) =>{
    try{
        const deleteNewsCondition = {_id: req.params.id};
        const deletedNews = await NewsModel.findOneAndDelete(deleteNewsCondition);

        if(!deletedNews){
            res.status(401).json({"success": false, "message": "News not found"})
        }

        res.json({"success": true, news: deletedNews})

    }catch(err){
        console.log(err);
        res.status(500).json({"success": false, "message": "Internal server error"});
    }
}