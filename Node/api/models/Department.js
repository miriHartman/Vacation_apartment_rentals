import mongoose, { Schema } from "mongoose";
import City from "./City.js";
import Category from "./Category.js";

const DepartmentSchema=new Schema({
NameDepartment:{
    type:String,
    require:false
},
DepartDescription:{
    type:String,
    require:false
},
DepartPicture:{
    type:String

},
CodeCategory:{
type:mongoose.Types.ObjectId,
ref:Category
},
CodeCity:{
    type:mongoose.Types.ObjectId,
    ref:City
},
address:{
    type:String
},
numBeds:{
    type:Number
},
additions:{
    type:String
    
},
priceDepart:{
    type:Number,
    require:true
},
codeAdvertiser:{
    type:mongoose.Types.ObjectId,
    ref:'Advertiser'
}
})
export default mongoose.model('department',DepartmentSchema)