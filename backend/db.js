const mongoose = require("mongoose");

// connect to localhost database

// To connect with MongoDb clound Atlas , just replace 

//const dbUrl = "// mongodb://localhost:27017/inotebook";

const dbName = "inotebook";

const dbUrl = `mongodb+srv://amuchand47:Chandcalifornia@cluster0.j3cxb4l.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(dbUrl, {
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{

    console.log("Connected to database!");

}).catch((e)=>{

    console.log(e);

});