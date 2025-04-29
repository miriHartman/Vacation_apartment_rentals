import mongoose, { Schema } from "mongoose";

const CitySchema =new Schema({
  
nameCity:{
    type:String,
},
  ArrCityDepartments:[{
    type:mongoose.Types.ObjectId,
    ref:'Department'
  }]

})
export default mongoose.model('City',CitySchema)