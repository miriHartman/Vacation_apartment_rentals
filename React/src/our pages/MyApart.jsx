import { getByAdverId1 } from "./api";
import { useEffect, useState } from "react"
// import { allDepart } from "./api"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './allApartments.css'
import { allCity1, getDepartByCityId1 } from "./api"
import { useSelector } from "react-redux";
// import './forms.css'


///
import CardActions from '@mui/material/CardActions';

export const MyApart=()=>{
    const [allAp,setAllapp]=useState([])
    const currentAdv=useSelector(r=>r.currentUser)

    useEffect(()=>{
        // getDepartByCityId1(id)
        // .then(q=>{
        //     if(Array.isArray(q.data))
        //     setAllapp(q.data)}
        // )
        // .catch(w=>{
        //     console.log(`cant do it ${w}`);
            
        // })


console.log("current adv",currentAdv._id);

        getByAdverId1(currentAdv._id)
        .then(o=>{
            if(Array.isArray(o.data)){
                setAllapp(o.data)
            console.log(o.data);}
            
        })
        .catch(err=>{
            console.log(err);
            
        })
    },[] )
    
    
    
    return<>
    
        { allAp && allAp.map((item,index)=>
 <div id='cardDiv'>
 <Card key={index} sx={{ maxWidth: 345 }} id="ccard">
  <CardMedia
     sx={{ height:250}}
     // image={process.env.PUBLIC_URL +item.CarPicture}
     title="car"
   />
   <CardContent >     
     <Typography  gutterBottom variant="h5" component="div"  >
     <h5>name: {item.NameDepartment}</h5>
        <h5>price: {item.priceDepart}</h5>
        <h10> additions:{item.additions}</h10>
        <h7>number of beds:{item.numBeds}</h7>
        <h5>address:{item.address}</h5>
        <h5>category:{item.CodeCategory?.NameCategory||"not available"}</h5>
        <h5>advertiser email:{item.CodeCity?.nameCity||"not available"}</h5>
        <h5>advertiser email:{item.codeAdvertiser?.Email||"not available"}</h5>

     </Typography>
     <Typography variant="body2" color="text.secondary">
     <h5>description :{item.DepartDescription}</h5>
     </Typography>
   </CardContent>
   <CardActions  className='but'>
 <h5></h5>
   </CardActions>
  

 </Card>
 </div>
)}


   

    </>
}