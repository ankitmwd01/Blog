const express=require("express");
const app=express();
const route =require("./user.js");
const connectToDb=require("./database/connection.js");
const bodyparser=require("body-parser");
const methodOverride=require("method-override");
connectToDb();
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(methodOverride("_method"));
app.use(route)
app.listen(3000,()=>{
    console.log("server is working fine");
})