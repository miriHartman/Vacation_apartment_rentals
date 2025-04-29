
import { useDispatch, useSelector } from 'react-redux';
import './forms.css'
import { enter1 } from './api';
import { disconnect } from 'process';
import swal from 'sweetalert';
import { setCurrentAdvar } from './action';
import { current } from '@reduxjs/toolkit';
import './store.js'

export const Enter=()=>{

const  dispatch=useDispatch()
const as=useSelector(w=>w.currentUser)

const send=(event)=>{
    event.preventDefault();
    const adver = {
        Email: event.target[0].value,
        Password: event.target[1].value,
    }
    
    console.log("adver",adver);
    enter1(adver)
    .then(a=>{
        console.log("before",as);

        console.log(" לenter1 הצליח להכנס"+a.data);
        // dispatch(setCurrentAdvar(a.data.advert))
        localStorage.setItem("token",a.data.token)

        dispatch(setCurrentAdvar(a.data.adv1))
        console.log("after",as);
        
        
        swal(`Hello ${adver.Email}`, `enter successfully! 😊😄😁😍 ${a}`, 'success')
       console.log('enter sucess');
       console.log("enter:",a.data);
       
    })
    .catch(b=>{
        swal(`Hello ${adver.Email}`,`oppppssss.....${b}`, 'error')
    })}



return<>
<h2>Enter---</h2>
<div class="container">
<form onSubmit={(e) => send(e)}>

    <label for="Email">  Email</label>
    <input type="email" id="lname" name="Email" placeholder="Your Email ..."/>
    
    <label for="password"> password</label>
    <input type="text" id="lname" name="password" placeholder="Your password.."/>
  
    <input type={'submit'}></input>
    </form>
       </div>

       </>  
}