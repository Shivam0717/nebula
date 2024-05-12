const {Schema, default:mongoose}=require("mongoose"); //default: mongoose: This part is extracting the default export of the "mongoose" module and assigning it to a variable named mongoose. The mongoose object is the main interface for interacting with MongoDB using this library.

const userSchema = new Schema({
    name : {type: String, required:true},
    email : {type: String, required:true},
    password : {type: String, required:true},
    gender : {type: String, enum:["male","female"], required:true},
    otp:String,
    isVerified:{type:Boolean, default:false},
    token:String,
    Cart : {type : [Object] },   //agr yaha normal obj type me pass kra toh undefined aya first render me jb data fetch kiya

    Wishlist : {type: [Object],required:true  }, 
    Admin:{type:Boolean,default:false}
 })

const Users =new mongoose.model("user",userSchema) //https://mongoosejs.com/docs/models.html
module.exports = Users  