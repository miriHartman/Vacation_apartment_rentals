import { useParams } from "react-router-dom";
import { updateDepart1 } from "./api";
import { useSelector } from "react-redux";
import swal from 'sweetalert'



export const UpdateDepart=()=>{
    const params=useParams()
    const currentAdvar = useSelector((state) => state.currentUser);

    const send=(event)=>{
    event.preventDefault();
    const apartid=params.id

    console.log("apartid"+apartid);
    console.log(currentAdvar);

            const depart = {
                NameDepartment:event.target[0].value,
                 DepartDescription:event.target[1].value,
                // DepartPicture:event.target[0].files,
                address:event.target[2].value,
                numBeds:event.target[3].value,
                additions:event.target[4].value,
                priceDepart:event.target[5].value,
               codeAdvertiser:currentAdvar[0]?._id
                
            }
            // סינון שדות ריקים
        const filteredDepart = Object.fromEntries(
            Object.entries(depart).filter(([key, value]) => value !== "")
        );

        console.log("Filtered depart object: ", filteredDepart);

        // קריאה ל-API עם הנתונים המסוננים
        updateDepart1(apartid, filteredDepart)
            .then((response) => {
                console.log("Department updated successfully", response.data);
            })
            .catch((err) => {
                swal('אין ביכולתך לעדכן',`its not your apartment`,'error')
                console.error("Error updating department", err);
                
            });
    };

    
         
    
    
        
            return<>
            <div class="container">
            <form onSubmit={(e) => send(e)}>
        
        <label for="fname">apartment Name</label>
        <input type="text" id="fname" name="NameDepartment" placeholder="Your name.."/>
    
        <label for="lndescriptioname">Appartment description</label>
        <input type="text" id="lname1" name="DepartDescription" placeholder="Your apartment description.."/>
    
        
        
        <label for="address">Appartment address</label>
        <input type="text" id="lname511" name="address" placeholder="Your apartment address.."/>
    
        
        <label for="numBeds">Appartment  num Beds</label><br></br> 
        <input type="number" id="lname5" name="numBeds" placeholder="Your apartment numBeds.."/> <br></br>  
        
       
        <label for="additions">Appartment  additions</label>
        <input type="text" id="lname6" name="additions" placeholder="Your apartment additions.."/>
        
        <label for="Appartmentprice">Appartment  price</label><br></br> 
        <input type="number" id="lname7" name="priceDepart" placeholder="Your apartment price.."/><br></br> 
        <label for="picture">Appartment picture</label>
        <input type="file" id="lname2" name="picture" placeholder="Your apartment picture path.."/> <br></br>
    
        
        
        <input type={'submit'}></input>
        </form>
           </div>
            
            </>
        }
