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
import { allCity1, getDepartByCityId1 } from "./api"
import { useNavigate } from "react-router-dom";
// import './forms.css'

export const AllCity=()=>
{    const nav=useNavigate()
    const [allAp,setAllapp]=useState([])
    const [allCity,setAll]=useState([])
    useEffect(()=>{
        allCity1().
        then(o=>{
            if(Array.isArray(o.data)){
            setAll(o.data)
            console.log(o.data);}
            
        })
        .catch(err=>{
            console.log(err);
            
        })
    },[] )
    const sendCity=(id)=>{
        nav(`Allcityid/${id}`)
        // getDepartByCityId1(id)
        // .then(q=>{
        //     if(Array.isArray(q.data))
        //     setAllapp(q.data)}
        // )
        // .catch(w=>{
        //     console.log(`cant do it ${w}`);
            
        // })

    }
    
    
    return<>
    {allCity && <table>
       
        {allCity && allCity.map((item,index)=>
        <button onClick={()=>sendCity(item._id)}>{item.nameCity}</button>
    )  }
        
        </table>}
        {/* { allAp.length>0 && allAp.map((item,index)=>
 
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
  

 </Card> */}
{/* )} */}


   

    </>
}