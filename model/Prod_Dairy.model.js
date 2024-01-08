const mongoose=require("mongoose")

const prod_Dairy=mongoose.Schema({
    "id": Number,
    "img": String,
    "title": String,
    "Rs":Number,
    "Mrp": Number,
    "saving": Number
})


const Prod_DairyModel=mongoose.model("prod_Dairy",prod_Dairy)

module.exports=Prod_DairyModel