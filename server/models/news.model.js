const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    bigCategory:{
        type: Schema.Types.ObjectId,
        ref: "bigCategories",
        default: null
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: "categories",
        default: null
    },
    type:{
        type: Schema.Types.ObjectId,
        ref: "types",
        default: null
    },
    series:{
        type: Schema.Types.ObjectId,
        ref: "series",
        default: null
    },
    keyword:{
        type:String,
        required: false
    },
    title:{
        type: String,
        required: true
    },
    background:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    date:{
        type: String, 
        required: true
    }
    // body:{
        
    //     type: String,
    //     required: true
    // },
    // end:{
    //     type: String,
    //     required: true
    // } 
})

module.exports = mongoose.model('news', newsSchema);