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
async function del(req,res){
    let id = req.params._id
    await Blog.deleteOne({id});
    res.redirect("/");
}
route.delete("/delete/:id",del)
route.delete("/read/delete/:id",del)
route.post("/new",async (req,res)=>{
    console.log(req.body)
   try {
    const {title,desc}=req.body;
    let user=await Blog.create({
        title,
        desc,
        createdAt: new Date,
    });
    console.log(user);
    res.redirect("/");
    
   } catch (error) {
    console.log(error);
   }
})
route.get("/read/:slug",async (req,res)=>{
    let id=req.params.slug;
    console.log(id);
    let user=await Blog.findOne({slug:id});
    console.log(user);
    res.render("detail",{blog:user});
})

module.exports=route;