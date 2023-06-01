const express=require("express");
const route =express.Router();
const Blog=require("./database/schema.js");
const { blob } = require("stream/consumers");
// const { title } = require("process");
route.get("/",async (req,res)=>{
    
    let allBlog= await Blog.find({}).sort({createdAt:-1});
    // console.log(allBlog)
   res.render("home",{blog:allBlog});
});
route.get("/new",(req,res)=>{
    res.render("new");
})
route.get("/delete/:id",async (req,res)=>{
    let id = req.params._id
    await Blog.deleteOne({id});
    res.redirect("/");
})
route.post("/new",async (req,res)=>{
    const {title,desc}=req.body;
    let user=await Blog.create({
        title,
        desc,
        createdAt: new Date,
    });
    console.log(user);
    res.redirect("/");
})
route.get("/read/:id",async (req,res)=>{
    let id=req.params._id;
    let user=await Blog.findOne({id});
    res.render("detail",{blog:user});
})

module.exports=route;