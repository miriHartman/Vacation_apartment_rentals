// import { allDepart } from "./api"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './allApartments.css'
import { allCity1, getDepartByCatId1, getDepartByCityId1 } from "./api"
// import './forms.css'
import { useEffect, useState } from "react"
import { allCategory1 } from "./api"
import './allApartments.css'


export const AllCategory=()=>{

const [allAp,setAllapp]=useState([])
  const [allCat,getAll]=useState([])


  useEffect(()=>{
    allCategory1().then(y=>{
        if(Array.isArray(y.data)){
        console.log("all category ok");
        getAll(y.data)}
        
    })
    .catch(err=>{
        console.log(err);
        
    })
  },[])
  const sendCategory=(id)=>{
    getDepartByCatId1(id)
    .then(q=>{
        if(Array.isArray(q.data))
        setAllapp(q.data)}
    )
    .catch(w=>{
        console.log(`cant do it ${w}`);
        
    })

  }


return (<>
<div id='cardDiv'>
  <div id='but'>
{allCat && <table>
        { allCat && allCat.map((item,index)=>
            <button onClick={()=>sendCategory(item._id)}>{item.NameCategory}</button>
    )  }
    </table>}
    </div>
    {allAp.length>0 && allAp.map((item,index)=>

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
)}
</div>
</>)
}




