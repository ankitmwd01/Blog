const express=require("express");
const app=express();
const route =require("./user.js");
const connectToDb=require("./database/connection.js");
const bodyparser=require("body-parser");
connectToDb();
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(route)
app.listen(3000,()=>{
    console.log("server is working fine");
})