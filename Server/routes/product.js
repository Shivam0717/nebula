const { addproduct, getproducts } = require("../controller/products")

const prodRouter=require("express").Router()

prodRouter.post("/addproduct",addproduct).get("/getproducts",getproducts)
 
module.exports=prodRouter  