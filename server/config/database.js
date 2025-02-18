const mongoose = require("mongoose");
require("dotenv").config();

exports.connect= () =>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("Connection is established"))
    .catch((error)=>{
        console.log("Db connection failed");
        console.log(error);
        process.exit(1);
    })
};