const CategoryModel = require('../models/category.model');

module.exports.createCategory = async (req, res) => {
    const {name, description, image} = req.body;

    // simple validation
    if(!name){
        return res.status(400).json({success: false, message: "Category name is required!"});
    }

    try{
        // check exist
        const category = await CategoryModel.findOne({name: name});

        if(category){
            return res.status(400).json({success: false, message: "category exists"});
        }

        const newCategory = new CategoryModel({
            name: name,
            description: description || "",
            image: image
        })

        await newCategory.save();

        return res.json({success: true, category: newCategory});


    }catch(err){
        console.log(err);
        res.status(500).json({success: false, message: "Internal server error"});
    }
}


module.exports.getCategory = async (req, res) => {
    try{
        const categories = await CategoryModel.find().sort({ _id: -1 });
        return res.json({success: true, categories: categories});

    }catch(err){
        console.log(err);
        res.status(500).json({success: false, message: "Internal server error"});
    }
}

module.exports.deleteCategory= async (req, res) => {
    try{
        // console.log("debug1",req.userId);
        const deletePostCondition = {_id: req.params.id};
        // console.log(deletePostCondition)

        const deletedPost = await CategoryModel.findOneAndDelete(deletePostCondition);

        if(!deletedPost){
            return res.status(401).json({"success": false, "message": "Post not found or user is not autherized"})
        }

        return res.json({"success": true, post: deletedPost})

    }catch(err){
        console.log(err);
        return res.status(500).json({"success": false, "message": "Internal server error"});
    }
}