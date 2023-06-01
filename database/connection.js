const mongoose=require("mongoose");
module.exports=connectToDb=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017",{
        dbName:"Blog",
    }).then(()=>{
        console.log("Connected To Mongo");
    })
    .catch((e)=>{
        console.log(e);
    })
}