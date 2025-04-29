
import swal from 'sweetalert';
import './forms.css'
import { login1 } from './api';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentAdvar } from './action';

export const Login=()=>{
    const  dispatch=useDispatch()
const send=(event)=>{
    event.preventDefault();
        const adver = {
            Email: event.target[0].value,
            Password: event.target[1].value,
            Phone: event.target[2].value,
            OtherPhone:event.target[3].value,
           
        }
        
        console.log("adver"+adver);
        login1(adver)
        .then(a=>{
            console.log('מי שחזר מהשליפה',a.data);
         
            dispatch(setCurrentAdvar(a.data.advert))
            localStorage.setItem("token",a.data.token)

            console.log();
            
            swal(`Hello ${adver.Email}`, `register successfully! 😊😄😁😍${a}`, 'success')
        })
        .catch(b=>{
            swal(`Hello ${adver.Email}`, `oppppssss.....${b}`, 'error')
        })}
        




    return<>
<h2>register:)</h2>
<div class="container">
<form onSubmit={(e) => send(e)}>

    <label for="Email">  Email</label>
    <input type="email" id="lname" name="Email" placeholder="Your Email ..."/>
    
    <label for="password"> password</label>
    <input type="text" id="lname" name="password" placeholder="Your password.."/>

    <label for="Phone"> Phone</label>
    <input type="text" id="lname" name="Phone" placeholder="Input  Your Phone.."/>

    <label for="OtherPhone">Other Phone</label>
    <input type="text" id="lname" name="otherPhone" placeholder="Input  another Phone.."/>
    <input type={'submit'}></input>
    </form>
       </div>
</>

}