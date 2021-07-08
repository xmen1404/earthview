const TypeModel = require('../models/type.model');

module.exports.createType = async (req, res) => {
    const {name} = req.body;

    // simple validation
    if(!name){
        return res.status(400).json({success: false, message: "Type name is required!"});
    }

    try{
        // check exist
        const type = await TypeModel.findOne({name: name});

        if(type){
            return res.status(400).json({success: false, message: "type exists"});
        }

        const newType = new TypeModel({
            name: name,
        })

        await newType.save();

        return res.json({success: true, type: newType});


    }catch(err){
        console.log(err);
        res.status(500).json({success: false, message: "Internal server error"});
    }
}


module.exports.getType = async (req, res) => {
    try{
        const types = await TypeModel.find();
        return res.json({success: true, types: types});

    }catch(err){
        console.log(err);
        res.status(500).json({success: false, message: "Internal server error"});
    }
}

module.exports.deleteType= async (req, res) => {
    try{
        // console.log("debug1",req.userId);
        const deleteTypeCondition = {_id: req.params.id};
        // console.log(deletePostCondition)

        const deletedType = await TypeModel.findOneAndDelete(deleteTypeCondition);

        if(!deletedType){
            return res.status(401).json({"success": false, "message": "Type not found or user is not autherized"})
        }

        return res.json({"success": true, type: deletedType})

    }catch(err){
        console.log(err);
        return res.status(500).json({"success": false, "message": "Internal server error"});
    }
}