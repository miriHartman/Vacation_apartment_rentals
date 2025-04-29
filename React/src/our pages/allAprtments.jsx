import { useEffect, useState } from "react"
// import { allDepart } from "./api"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './allApartments.css'
import swal from 'sweetalert';

import { allDepart1, deleteDepart1 } from "./api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Outlet, useNavigate } from "react-router-dom"
// import { setCurrentCar, setPage } from './state_action';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
// import ToggleOnIcon from '@mui/icons-material/ToggleOn';
// import ToggleOffIcon from '@mui/icons-material/ToggleOff';
// import CableIcon from '@mui/icons-material/Cable';
// import EvStationIcon from '@mui/icons-material/EvStation';
// import GasMeterRoundedIcon from '@mui/icons-material/GasMeterRounded';
// import SolarPowerRoundedIcon from '@mui/icons-material/SolarPowerRounded';
// import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';


export const AllApartments=()=>{
const nav=useNavigate()
const[allApart,getAll]=useState([])
const currentAdv=useSelector(r=>r.currentUser)
useEffect(()=>{
    allDepart1()
    .then(t=>{
      if(Array.isArray(t.data))
        {
        getAll(t.data)
          console.log("ok");}
         else{
            console.log('not list ');
            
          }
      console.log(t);
      
    })
    .catch(err=>{
        console.log(err);
        
    });

},[]);
 
const remove=(apartid)=>{
  
    const advId=currentAdv
 console.log("----------",apartid);
  console.log("ad id",advId);
  console.log(currentAdv._id);
  console.log(currentAdv);
  
 deleteDepart1(apartid,advId[0])
 .then(q=>{
  //swal(`are you shure you want to remove this apartment`,`${q.data}`)
  console.log(`delete ok ${q} `);
 })
 .catch(w=>{
  //swal('לא תגנוב!!!',`its not your apartment`,'error')
  
 })
}
const update=(apart)=>{
  
console.log("hhh",currentAdv);
  if(currentAdv?._id==apart.codeAdvertiser?._id)
  nav(`/UpdateDepart/${apart._id}`)
else{
  swal('השגת גבול!!!!',`its not your apartment`,'error')
}
}

return( <>
  
    <div id='cardDiv'>
    { allApart.length!=0 && allApart.map((item,index)=>
 
    <Card key={index} sx={{ maxWidth: 345 }} id="ccard">
     <CardMedia
        sx={{ height:250}}
        image={process.env.PUBLIC_URL+`/pict/${item.DepartPicture}`+".jpg"}
         
        title="car"
      />
      <CardContent >  
   
        <Typography  gutterBottom variant="h5" component="div"  >
        <h5>name: {item.NameDepartment}</h5>
        <h5>price: {item.priceDepart}</h5>
        <h5>mail:{item.codeAdvertiser?.Email}</h5>
        <h10> additions:{item.additions}</h10>
        <h7>number of beds:{item.numBeds}</h7>
        <h5>address:{item.address}</h5>
        <h5>category:{item.CodeCategory?.NameCategory||"not available"}</h5>
        <h5>advertiser email:{item.CodeCity?.nameCity||"not available"}</h5>
        <h5>advertiser email:{item.codeAdvertiser?.Email||"not available"}</h5>
        {/* <img src='${item.DepartPicture}'></img> */}

        </Typography>
        <Typography variant="body2" color="text.secondary">
        <h5>description :{item.DepartDescription}</h5>
        <button onClick={()=>{remove(item._id)}}>remove</button><br></br>
       <button onClick={()=>{update(item)}}>update </button>
        </Typography>
      </CardContent>
      <CardActions  className='but'>
    <h5></h5>
        
      </CardActions>
     

    </Card>
  )}
  </div>
</>
)}

