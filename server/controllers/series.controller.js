const SeriesModel = require('../models/series.model');
const NewsModel = require("../models/news.model");

module.exports.createSeries = async (req, res) => {
    const {name, description, image} = req.body;

    // simple validation
    if(!name){
        return res.status(400).json({success: false, message: "series name is required!"});
    }

    try{
        // check exist
        const series = await SeriesModel.findOne({name: name});

        if(series){
            return res.status(400).json({success: false, message: "series exists"});
        }

        const newSeries = new SeriesModel({
            name: name,
            description: description || "",
            image: image
        })

        await newSeries.save();

        return res.json({success: true, series: newSeries});


    }catch(err){
        console.log(err);
        res.status(500).json({success: false, message: "Internal server error"});
    }
}


module.exports.getSeries = async (req, res) => {
    try{
        let categories = await SeriesModel.find().sort({ _id: -1 });
        let count = []

        for(let i = 0; i< categories.length; i++){
            // console.log("check category", categories[i]._id);
            const newsCount = await NewsModel.countDocuments({series:categories[i]._id}).sort({ _id: -1 });
            // console.log("debug, get series", news);
            // console.log("before", categories[i])
            // categories[i]["count"] = news;
            // console.log("after", categories[i])
            count.push(newsCount)
        } 

        // categories = categories.map((cat,idx) => ({...cat, count: count[idx]}))

        // console.log("check category", categories);
        console.log("check count", count);

        return res.json({success: true, categories: categories, count: count});

    }catch(err){
        console.log(err);
        res.status(500).json({success: false, message: "Internal server error"});
    }
}

module.exports.deleteSeries = async (req, res) => {
    try{
        // console.log("debug1",req.userId);
        const deleteCondition = {_id: req.params.id};
        // console.log(deletePostCondition)

        const deletedSeries = await SeriesModel.findOneAndDelete(deleteCondition);

        if(!deletedSeries){
            return res.status(401).json({"success": false, "message": "Series not found"})
        }

        return res.json({"success": true, Series: deletedSeries})

    }catch(err){
        console.log(err);
        return res.status(500).json({"success": false, "message": "Internal server error"});
    }
}