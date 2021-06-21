const PostModel = require("../models/post.model");

module.exports.createPost = async (req, res) =>{
    // phải nói chuyện với db => là hàm bất đồng bộ
    const {title, description, url, status} = req.body;

    // simple validation
    if(!title){
        return res.status(400).json({"success": false, "message": "title is required"});
    }

    // tạo post mới và đẩy vào db
    try{
        const newPost = new PostModel({
            title: title,
            description: description,
            url: url.startsWith('https://') ? url : `https//${url}`,
            status: status ||  'TO LEARN',
            user: req.userId
        })

        await newPost.save();

        res.json({"success": true, "message": "Happy Learning", "post": newPost});


    }catch(err){
        console.log(err);
        res.status(500).json({"success": false, "message": "Internal server error"});
    }
}

module.exports.getPost = async (req,res) =>{
    try{
        const posts = await PostModel.find({user: req.userId}).populate('user', ['username']);
        res.json({"success": true, "posts": posts});

    }catch(err){
        console.log(err);
        res.status(500).json({"success": false, "message": "Internal server error"});
    }
}

module.exports.updatePost = async (req, res)=>{
    const {title, description, url, status} = req.body;

    // simple validation
    if(!title){
        return res.status(400).json({"success": false, "message": "title is required"});
    }

    // tạo post mới và đẩy vào db
    try{
        let updatedPost = {
            title: title,
            description: description || "",
            url: (url.startsWith('https://') ? url : `https//${url}`) || "",
            status: status ||  'TO LEARN',
        }

        const postUpdateCondition = {_id: req.params.id, user: req.userId};


        updatedPost = await PostModel.findOneAndUpdate(postUpdateCondition, updatedPost, {new: true}).populate("user", ['username']);

        // Kiểm tra xem update có thành công không
        if(!updatedPost){
            res.status(401).json({"success": false, "message": "Post not found or user is not autherized"})
        }

        res.json({"success": true, "message": "Excellent progress", "post": updatedPost});


    }catch(err){
        console.log(err);
        res.status(500).json({"success": false, "message": "Internal server error"});
    }   
}

module.exports.deletePost = async (req,res) =>{
    try{
        const deletePostCondition = {_id: req.params.id, user: req.userId};
        const deletedPost = await PostModel.findOneAndDelete(deletePostCondition);

        if(!deletedPost){
            res.status(401).json({"success": false, "message": "Post not found or user is not autherized"})
        }

        res.json({"success": true, post: deletedPost})

    }catch(err){
        console.log(err);
        res.status(500).json({"success": false, "message": "Internal server error"});
    }
}