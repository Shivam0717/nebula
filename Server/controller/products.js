const products = require("../model/products")
const Users = require("../model/user")
const jwt =require("jsonwebtoken")
const bcrypt=require("bcrypt")
const nodemailer=require("nodemailer")
require("dotenv").config()



 
// const getproducts=async(req,res)=>{
//     try {
//         console.log("one");
//         const {token} =req.cookies   //destructuring bcoz we want token from an object   //in cookies other things are also there
//         console.log("two");
//         if(!token){
//             console.log("two");
//             res.status(404).json({success: false, message:"user not logged in"})
//         }
//         console.log("twoo");
//         const decoded=await jwt.verify(token,process.env.JWT_SECRET_KEY)  //i forgot to write process.env (as we are taking key from env)
//         if(!decoded){
//             console.log("three");
//             res.status(400).json({success:false,message:"user not athenticated"}) 
//         }
//         else{
//         console.log("3");
//         userId=decoded.userid  //we are using userId here bcoz while giving jwt token at login we give a payload {userid : exist._id},
//         const id=userId;
//         const existinguser= await Users.findById(id);
//         if(existinguser){
//             const prod= await products.find()
//             res.status(400).json({success:true, message:"products fetched", prod})
//         }
//         else{
//             res.status(400).json({success:false, message:"user not auth"})
//         }
//     }
//     } catch (error) {
//         res.send("error")
//     }
// }

const getproducts=async(req,res)=>{
    const prod=await products.find()
    if(prod){
    res.status(200).json({success:true, message:"products fetched", prod})
    }
    else{
        res.status(400).json({success:false, message:" fetching failed"})
    }
}
 

const addproduct=async(req,res)=>{
    try {
        const {id,title,stock,brand,description,rating ,price,thumbnail,category,discountPercentage}=req.body
        const newprod= new products({
            id,title,brand,stock,description,rating ,price,thumbnail,category,discountPercentage
        })
        const saveprd= await newprod.save()
        res.status(200).json({success:true, message:"Product Added", prod:newprod})
    } catch (error) {
        res.send(error,"ghh")  
    }
}
const contact=async(req,res)=>{
    try {
        const {email,content,name}=req.body;
        
        const info ={ 
            from: email,
            to: process.env.USER,
            subject: `Mail from customer ${name}`,
            text:content
        }
        
        
    } catch (error) {
        
    }
}

module.exports = {addproduct,getproducts}