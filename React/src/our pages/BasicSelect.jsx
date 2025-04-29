
import swal from "sweetalert";
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export default function BasicSelect() {
  const [admin, setAdmin] = React.useState('');
//   const dispatch=useDispatch()
// const allRent=useSelector(r=>r.rent)
 const nav=useNavigate()

  const handleChange = (event) =>{

     setAdmin(event.target.value);
  }
  const Changee=()=>{
    if(admin==10){
     nav('/AllCity')
      }
      else if(admin==20){
        nav('/AllCategory')
      }
      else if(admin==30){
        nav('/Numbeds')
      }
      else if(admin==40){
        nav('/Price')
      }
      else{
        
      }
      
  }

  

  return (
    <Box sx={{ minWidth: 130 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"> Filters</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={admin}
          label="Age"
          onChange={handleChange}
        >
           <MenuItem onClick={Changee} value={10}>   Filter by city </MenuItem>
          <MenuItem onClick={Changee} value={20}> Filter by  category</MenuItem>
          <MenuItem onClick={Changee}  value={30}>  Filter by num beds </MenuItem>
          <MenuItem onClick={Changee} value={40}> Filter by price </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};