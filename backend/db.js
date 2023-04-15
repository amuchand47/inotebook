const mongoose = require("mongoose");
const dotenv = require("dotenv")

// connect to localhost database
// To connect with MongoDb clound Atlas , just replace 
const dbUrl = "mongodb://localhost:27017/inotebook";


// dotenv.config({path: './config.env'})
// const dbUrl = process.env.DATABASE;

mongoose.connect(dbUrl, {
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{

    console.log("Connected to database!");

}).catch((e)=>{

    console.log(e);

});