const mongoose=require("mongoose");
slugify = require("slugify");

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
    },
    slug:{
        type:String,
        required:true,
        unique:true,
    }
})
blog.pre('validate',function (next){
    if(this.title){
        this.slug=slugify(this.title,{
            lower:true,
            strict:true,
        })
    }
    next();
})
const Blog= new mongoose.model("Blog",blog);

module.exports=Blog;