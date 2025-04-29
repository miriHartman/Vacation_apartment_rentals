import { addCategory1 } from './api';
import './forms.css'

export const AddCategory=()=>{

const send=(event)=>{
    event.preventDefault();
            const c = {
                NameCategory: event.target[0].value  
            }
    
            addCategory1(c)
            .then(y=>
                {console.log("category add");})
            .catch(err=>
                {console.log("error add category");
            })
    }
    
        

    return<>
    
        <div class="container">
        <form onSubmit={(e) => send(e)}>
            <label for="catName">category name</label>
            <input type="text" id="catname" name="catName" placeholder=" category name.."/>
            <input type={'submit'}></input>
            </form>
               </div>
               </>
}