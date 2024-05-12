const{Schema,default:mangoose, default: mongoose}=require ("mongoose")

const prodschema=new Schema({
    "id":{type:String, required:true},
    "title":{type:String, required:true},
    "brand":{type:String, required:true},
    "description":{type:String, required:true},
    "rating":{type:String, required:true},
    "price":{type:String, required:true},
    "thumbnail":{type:String, required:true},
    "category":{type:[String], required:true},
    "stock":{type:String, required:true},
    "discountPercentage":{type:String, required:true}
})

const products= new mongoose.model("product",prodschema);
module.exports = products


// "title": "iPhone 9",
//             "description": "An apple mobile which is nothing like apple",
//             "price": 549,
//             "discountPercentage": 12.96,
//             "rating": 4.69,
//             "stock": 94,
//             "brand": "Apple",
//             "category":["smartphones","electronics"] ,
//             "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//             "images": [
//                 "https://i.dummyjson.com/data/products/1/1.jpg",
//                 "https://i.dummyjson.com/data/products/1/2.jpg",
//                 "https://i.dummyjson.com/data/products/1/3.jpg",
//                 "https://i.dummyjson.com/data/products/1/4.jpg",
//                 "https://i.dummyjson.com/data/products/1/thumbnail.jpg"