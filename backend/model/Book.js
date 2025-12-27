const mongoose=require('mongoose');
const bigSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"book title is required"]
    },
    author:{
        type:String,
        required:[true,"Author name is required"]
    },
    description:{
        type:String

    },
    isAvailable:{
        type:Boolean,
        default:true


    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});
const Book=mongoose('Book',bigSchema);
module.exports=Book;