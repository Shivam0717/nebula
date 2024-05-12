const mongoose = require("mongoose")

const connectDb= async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/store")
        console.log("databse connected");
    } catch (error) {
        console.log(`error in connecting with database ${error}`);
    }
}
module.exports =connectDb