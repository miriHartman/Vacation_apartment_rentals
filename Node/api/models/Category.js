
//import Department from "./Department.js";

import mongoose, { Schema } from "mongoose"

// קטגוריה: שם קטגוריה (צימר, יחידת אירוח, דירה להשכרה...), מערך דירות
const CategorySchema =new Schema({
NameCategory:{
    type:String,
    require:true
},
ArrCatDepartment:[{
    type:mongoose.Types.ObjectId,
    ref:'Department'
}]
})
export default mongoose.model('Category',CategorySchema)