const SeriesModel = require('../models/series.model');

module.exports.createSeries = async (req, res) => {
    const {name, description} = req.body;

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
            description: description || ""
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
        const categories = await SeriesModel.find();
        return res.json({success: true, categories: categories});

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

        const deletedPost = await SeriesModel.findOneAndDelete(deletePostCondition);

        if(!deletedSeries){
            return res.status(401).json({"success": false, "message": "Series not found"})
        }

        return res.json({"success": true, Series: deletedSeries})

    }catch(err){
        console.log(err);
        return res.status(500).json({"success": false, "message": "Internal server error"});
    }
}