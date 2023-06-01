const mongoose=require("mongoose");

const blog= new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    createdAt:{
       type:Date,
       required:true,
    }
})
const Blog= new mongoose.model("Blog",blog);
module.exports=Blog;