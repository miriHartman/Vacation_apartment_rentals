import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './Grouped.css'

export default function Grouped() {

  const user=useSelector(x =>x.currentUser)
    const dispatch=useDispatch()
   
    const searchBy=['city','num beds','category','price']
  const options = searchBy.map((option) => {
      const firstLetter = option.kind[0].toUpperCase();
     return {
       firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
     };
  }
);

   const blor=(event)=>{
      // if(event.target.value!='דגם' ||(event.target.value=='דגם' && user.KindUPass==1) )
     //dispatch(setCurrentBox(event.target.value))

      
   }
   //const currentkind=useSelector(w=>w.CurrentBox)
   
   

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      getOptionLabel={(option) => option.kind }
      sx={{ width: 300 }}
      renderInput={(params) => <TextField id="text"{...params} label="Search by"  
      onBlur={e=>blor(e)}/>}
    />
  );
}