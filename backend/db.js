const mongoose = require("mongoose");

// connect to localhost database

mongoose.connect("mongodb://localhost:27017/inotebook", {
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{

    console.log("Connected to database!");

}).catch((e)=>{

    console.log(e);

});