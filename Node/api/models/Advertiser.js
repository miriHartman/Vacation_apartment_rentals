import mongoose, { Schema } from "mongoose";
import Department from "./Department.js";

//מפרסם:  אימייל - ייחודי, סיסמה, טלפון, טלפון נוסף – לא חובה, מערך דירות
const AdvertiserSchema=new Schema({
    Email:{
        type:String,
        require:true,
        //uniqe:true
    },
    Password:{
        type:String,
        require:true,
       // uniqe:true
    },
    Phone:{
        type:String,
        require:true,
        length:10
    },
    OtherPhone:{
        type:String,
        require:false
    },
     ArrDepartment:[{
        type:mongoose.Types.ObjectId,
       ref:'Department'
        }]




})
export default mongoose.model('Advertiser',AdvertiserSchema)