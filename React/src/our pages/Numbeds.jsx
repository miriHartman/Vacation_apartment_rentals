import { useState } from 'react';
import {getByNumBeds1}from'./api'
// import { allDepart } from "./api"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './allApartments.css'

export const Numbeds=()=>{

    const [allAp,setAllap]=useState([])
    const send=(event)=>{
        event.preventDefault();
        const numbeds =  event.target[0].value
        
        getByNumBeds1(numbeds)
        .then(a=>{
            console.log(a.data);
            if(Array.isArray(a.data)){
            setAllap(a.data)
        console.log("allapp change!!!!!!!!!!!!1");
        }
        })
        .catch(b=>{
            console.log(b.data);
            
        })}
    

return<>
<div class="container">
<h2>how many beds you needs at last</h2>

<form onSubmit={(e) => send(e)}>

    
    <input type="text" id="lname" name="password" placeholder="I need beds:"/>
  
    <input type={'submit'}></input>
    </form>
       </div>
       <div id='cardDiv'>


    {allAp.length>0 &&  allAp.map((item,index)=>
 
    <Card key={index} sx={{ maxWidth: 345 }} id="ccard">
     <CardMedia
        sx={{ height:250}}
        // image={process.env.PUBLIC_URL +item.CarPicture}
        title="car"
      />
      <CardContent >     
        <Typography  gutterBottom variant="h5" component="div"  >
        <h5>name: {item.NameDepartment}</h5>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <h5>description :{item.DepartDescription}</h5>
        </Typography>
      </CardContent>
      <CardActions  className='but'>
    <h5></h5>
        {/* <Button   onClick={() =>show(item)}  size="small">פרטים נוספים</Button>
{selectedCar && <Learnmore car={selectedCar}/>} */}
      </CardActions>
     

    </Card>
  )}
  </div>
</>

}