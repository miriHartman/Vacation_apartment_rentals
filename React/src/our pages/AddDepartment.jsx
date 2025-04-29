// import { useEffect, useState } from 'react';
// import { addDepartment1, allCategory1, allCity1 } from './api';
// import './forms.css'
// import { useSelector } from 'react-redux';
// export const AddDepartment=()=>
//     {    const [allCat,getAll]=useState([])
//         const[allCity,setAll]=useState([])
//         const currentAdvar=useSelector(y=>y.currentUser)
//         useEffect(()=>{
//                 allCity1().
//                 then(o=>{
//                     if(Array.isArray(o.data)){
//                     setAll(o.data)
//                     console.log(o.data);}
                    
//                 })
//                 .catch(err=>{
//                     console.log(err);
                    
//                 })
//                 allCategory1().then(y=>{
//                     if(Array.isArray(y.data)){
//                     console.log("all category ok");
//                     getAll(y.data)}
                    
//                 })
//                 .catch(err=>{
//                     console.log(err);
                    
//                 })
//             },[] )
//     const send=(event)=>{
        
// event.preventDefault();
//         const depart = {
//             NameDepartment:event.target[0].value,
//             DepartDescription:event.target[1].value,
//             DepartPicture:event.target[0].files,
//             CodeCategory:event.target[2].value,
//             CodeCity:event.target[3].value,
//             address:event.target[4].value,
//             numBeds:event.target[5].value,
//             additions:event.target[6].value,
//             priceDepart:event.target[7].value,
//             codeAdvertiser:currentAdvar._id
            
//         }

//         addDepartment1(depart)
//         .then(y=>
//             {console.log("department add");})
//         .catch(err=>
//             {console.log("error add department");
//         })
// }
//         return<>
//         <div class="container">
//         <form onSubmit={(e) => send(e)}>
    
//     <label for="fname">apartment Name</label>
//     <input type="text" id="fname" name="NameDepartment" placeholder="Your name.."/>

//     <label for="lndescriptioname">Appartment description</label>
//     <input type="text" id="lname1" name="DepartDescription" placeholder="Your apartment description.."/>

//     <label for="picture">Appartment picture</label>
//     <input type="file" id="lname2" name="picture" placeholder="Your apartment picture path.."/> <br></br>

//     <label for="CodeCategory">Appartment Code Category</label>
//     {/* <input type="text" id="lname3" name="CodeCategory" placeholder="Your apartment Code Category.."/> */}
//     <select id="country" name="country" >
//     {allCat && allCat.map((item,index)=>  

//       <option value={item._id}>{item.NameCategory}</option>)
//     }</select>
//     <label for="CodeCity">Appartment  City</label>
//     <select id="country" name="country" >
//     {allCity && allCity.map((item,index)=>  

//       <option value={item._id}>{item.nameCity}</option>)
//     }
//     </select>
//     {/* <label for="CodeCity">Appartment Code City</label>
//     <input type="text" id="lname4" name="CodeCity" placeholder="Your apartment Code City.."/>  */}

//     <label for="address">Appartment address</label>
//     <input type="text" id="lname5" name="address" placeholder="Your apartment address.."/>

    
//     <label for="numBeds">Appartment  num Beds</label><br></br> 
//     <input type="number" id="lname5" name="numBeds" placeholder="Your apartment numBeds.."/> <br></br>  
    
   
//     <label for="additions">Appartment  additions</label>
//     <input type="text" id="lname6" name="additions" placeholder="Your apartment additions.."/>
    
//     <label for="Appartmentprice">Appartment  price</label><br></br> 
//     <input type="number" id="lname7" name="priceDepart" placeholder="Your apartment price.."/><br></br> 

    
//     {/* <label for="codeAdvertiser">Appartment code Advertiser</label>
//     <input type="text" id="lname8" name="codeAdvertiser" placeholder="Your apartment Code Advertiser.."/> */}

//     <input type={'submit'}></input>
//     </form>
//        </div>
        
//         </>
//     }
import { useEffect, useState } from "react";
import { addDepartment1, allCategory1, allCity1 } from "./api";
import "./forms.css";
import { useSelector } from "react-redux";

export const AddDepartment = () => {
    const [allCat, getAll] = useState([]);
    const [allCity, setAll] = useState([]);
    const currentAdvar = useSelector(state => state.currentUser);

    useEffect(() => {
        allCity1()
            .then((o) => {
                if (Array.isArray(o.data)) {
                    setAll(o.data);
                    console.log(o.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });

        allCategory1()
            .then((y) => {
                if (Array.isArray(y.data)) {
                    console.log("all category ok");
                    getAll(y.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const send = (event) => {
        event.preventDefault();
        const depart = {
            NameDepartment: event.target.NameDepartment.value,
            DepartDescription: event.target.DepartDescription.value,
            DepartPicture: event.target.DepartPicture.value,
            CodeCategory: event.target.CodeCategory.value,
            CodeCity: event.target.CodeCity.value,
            address: event.target.address.value,
            numBeds: event.target.numBeds.value,
            additions: event.target.additions.value,
            priceDepart: event.target.priceDepart.value,
            codeAdvertiser: currentAdvar?._id,
        };
        console.log("hhh",depart.DepartPicture);

        console.log("Depart to send:", depart);

        addDepartment1(depart)
            .then(() => {
                console.log("Department added successfully.");
            })
            .catch((err) => {
                console.log("Error adding department:", err);
            });
    };

    return (
        <>
            <div className="container">
                <form onSubmit={send}>
                    <label htmlFor="NameDepartment">Apartment Name</label>
                    <input type="text" id="NameDepartment" name="NameDepartment" placeholder="Your name.." />

                    <label htmlFor="DepartDescription">Apartment Description</label>
                    <input
                        type="text"
                        id="DepartDescription"
                        name="DepartDescription"
                        placeholder="Your apartment description.."
                    />

                    
                    <label htmlFor="CodeCategory">Apartment Code Category</label>
                    <select id="CodeCategory" name="CodeCategory">
                        {allCat &&
                            allCat.map((item) => (
                                <option key={item._id} value={item._id}>
                                    {item.NameCategory}
                                </option>
                            ))}
                    </select>

                    <label htmlFor="CodeCity">Apartment City</label>
                    <select id="CodeCity" name="CodeCity">
                        {allCity &&
                            allCity.map((item) => (
                                <option key={item._id} value={item._id}>
                                    {item.nameCity}
                                </option>
                            ))}
                    </select>

                    <label htmlFor="address">Apartment Address</label>
                    <input type="text" id="address" name="address" placeholder="Your apartment address.." />

                    <label htmlFor="numBeds">Number of Beds</label>
                    <input type="number" id="numBeds" name="numBeds" placeholder="Number of beds.." />

                    <label htmlFor="additions">Additions</label>
                    <input type="text" id="additions" name="additions" placeholder="Additions.." />

                    <label htmlFor="priceDepart">Price</label>
                    <input type="number" id="priceDepart" name="priceDepart" placeholder="Price.." />
                    <label htmlFor="DepartPicture">Apartment Picture</label>
                    <input type="text" id="DepartPicture" name="DepartPicture" /> <br />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
};