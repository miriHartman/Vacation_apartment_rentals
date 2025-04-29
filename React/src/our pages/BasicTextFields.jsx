
// import  React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import './BasicTextFields.css'
// import { useDispatch, useSelector } from 'react-redux';
// import { clearCurrentCars, setCurrentArrCars } from './state_action';
// import { useNavigate } from 'react-router';
// import { all } from 'axios';


// export default function BasicTextFields() {
//   const nav=useNavigate()
//   const namekind= useSelector(x=>x.CurrentBox)
//   const model =useSelector( v=> v.ModelCar)
//   const type =useSelector(c=> c.KindMoving)
//   const kind=useSelector(e=>e.KindCar)
//   console.log(namekind);
  
//   const allcars=useSelector(b=>b.CurrentArrCars)
//   const cars=useSelector(b=>b.Car)
//   const dispatch=useDispatch()
//   const filterarr=(e)=>{
//     let boolcars
//       if(namekind=='City' && e.target.value!="" ){
//       //  boolcars= allcars.filter(n => n.City.includes(e.target.value)) 
//       const filterCars = allcars.filter((c)=>c.City.includes(e.target.value))
//         dispatch(setCurrentArrCars(filterCars))
//     }
    
//     else if(namekind=='Degem' && e.target.value!="" ){
//       // const filterCars=allcars.filter(m=>m.CodeModdel==model.find(i=>i.CarCompany.toLowerCase(). includes(e.target.value)).ModelCarID)
//       const filterCars=allcars.filter(m=>m.CodeModdel==model.find(i=>i.Moddel.includes(e.target.value)).ModelCarID)
//       dispatch(setCurrentArrCars(filterCars))
//      }
//       else if(namekind=='describCar' && e.target.value!="" ){
//         //  const filterCars = kind.find(o=>o.CarKindCode==model.find(x=>x.ModelCarID==item.CodeModdel).CarKindCode).describCar.includes(e.target.value)
//       const filterCars =allcars.filter(t=>t.CodeModdel==model.filter(x=>x.CarKindCode==kind.find(m=>m.describCar.includes(e.target.value)).CarKindCode).ModelCarID)
//    dispatch(setCurrentArrCars(filterCars))
//    }
//         else if(namekind=='NumPlaces' && e.target.value!="" ){
//          const filterCars = allcars.filter(n => n.NumPlaces.includes(e.target.value)) 
//          dispatch(setCurrentArrCars(filterCars))
//        }
//          else if(namekind=='descKindMoving' && e.target.value!="" ){
//           const filterCars=allcars.filter(p=>p.CodeKindMoving==type.find(u=>u.descKindMoving.includes(e.target.value)).KindMovingId)
//           dispatch(setCurrentArrCars(filterCars))
//        }
// //          else{
// //           clearCurrentCars('')
// //          }
// else
//     if(e.target.value=="")  dispatch(setCurrentArrCars(cars))
//           // dispatch(clearCurrentCars(boolcars))


//     nav(`/Filters/`)
//   }


//   return (
//     <Box  onChange={e=>filterarr(e)}
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//    >  
//       <TextField id="outlined-basic" label={`${namekind}`} variant="outlined" />
//     </Box>
//   );
// }
 import  React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import './BasicTextFields.css'
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrentCars, setCurrentArrCars } from './state_action';
import { useNavigate } from 'react-router';
import { all } from 'axios';


export default function BasicTextFields() {
  const nav=useNavigate()
  const namekind= useSelector(x=>x.CurrentBox)
  const model =useSelector( v=> v.ModelCar)
  const type =useSelector(c=> c.KindMoving)
  const kind=useSelector(e=>e.KindCar)
  console.log(namekind);
  
  const allcars=useSelector(b=>b.Car)
  const cars=useSelector(b=>b.Car)
  const dispatch=useDispatch()

  const findModel = (c) => {
    for (let i = 0; i < model.length; i++) {
        if (model[i].ModelCarID == c)
            return model[i]
    }
}

    const filterarr=(e)=>{
       let filterCars
       if(namekind=='עיר' && e.target.value!="" ){
      //  boolcars= allcars.filter(n => n.City.includes(e.target.value)) 
       filterCars = allcars.filter((c)=>c.City.includes(e.target.value)&& c.Available==true)
        
      }

      else if(namekind=='דגם' && e.target.value!="" ){
      filterCars = allcars.filter(x => findModel(x.CodeModdel).CarCompany.toLowerCase().includes(e.target.value))
      }

         
      else if(namekind=='סוג רכב' && e.target.value!="" ){
        //  const filterCars = kind.find(o=>o.CarKindCode==model.find(x=>x.ModelCarID==item.CodeModdel).CarKindCode).describCar.includes(e.target.value)
       filterCars =allcars.filter(t=>t.CodeModdel==model.filter(x=>x.CarKindCode==kind.find(m=>m.describCar.includes(e.target.value)).CarKindCode).ModelCarID && t.Available==true)
      }
        else if(namekind=='כמות מקומות' && e.target.value!="" ){
         filterCars = allcars.filter(n => n.NumPlaces.includes(e.target.value) && n.Available==true) 
       }
         else if(namekind=='סוג הנעה' && e.target.value!="" ){
           filterCars=allcars.filter(p=>p.CodeKindMoving==type.find(u=>u.descKindMoving.includes(e.target.value)).KindMovingId && p.Available==true)
       }

      
      if(e.target.value=="") 
         dispatch(setCurrentArrCars(cars))
         else 
          dispatch(setCurrentArrCars(filterCars))


    nav(`/Filters/`)
    
  }

  return (
    <Box  onChange={e=>filterarr(e)}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
   >  
      <TextField id="outlined-basic" label={`${namekind}`} variant="outlined" />
    </Box>
  );
}
