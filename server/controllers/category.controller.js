const CategoryModel = require('../models/category.model');

module.exports.createCategory = async (req, res) => {
    const {name, description} = req.body;

    // simple validation
    if(!name){
        res.status(400).json({success: false, message: "Category name is required!"});
    }

    try{
        // check exist
        const category = CategoryModel.findOne({name: name});

        if(category){
            res.status(400).json({success: false, message: "category exists"});
        }

        const newCategory = new CategoryModel({
            name: name,
            description: description || ""
        })

        await newCategory.save();

        res.json({success: true, category: newCategory});


    }catch(err){
        console.log(err);
        res.status(500).json({success: false, message: "Internal server error"});
    }
}


module.exports.getCategory = async (req, res) => {
    try{
        const categories = await CategoryModel.find();
        res.json({success: true, categories: categories});

    }catch(err){
        console.log(err);
        res.status(500).json({success: false, message: "Internal server error"});
    }
}