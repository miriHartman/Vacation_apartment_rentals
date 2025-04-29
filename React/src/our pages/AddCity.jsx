import './forms.css'
import { addCity1 } from './api';

export const AddCity=()=>{

 const send=(event)=>{
    
    
     event.preventDefault();
        const c = {
            nameCity: event.target[0].value  
        }

        addCity1(c)
        .then(y=>
            {console.log("city");})
        .catch(err=>
            {console.log("error");
        })
}

    return<>

<div class="container">
<form onSubmit={(e) => send(e)}>
    <label for="cityName">city name</label>
    <input type="text" id="cityName" name="cityName" placeholder=" city name.."/>
    <input type={'submit'}></input>
    </form>
       </div>
        
    </>
}