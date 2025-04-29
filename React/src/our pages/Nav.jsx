

import { Link, NavLink } from 'react-router-dom'
import { Outlet, useNavigate } from "react-router-dom"
import './Nav.css'
import { useDispatch, useSelector } from 'react-redux'
import './Routing.jsx'
import BasicSelect from './BasicSelect'
import Adds from './Adds'
// import BasicTextFields from './BasicTextFields'
//  import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
//  import SearchIcon from '@mui/icons-material/Search';
// import BasicSelect from './BasicSelect'



export const Nav=()=>{

     const adver = useSelector(x =>x.currentUser)
    //  let kind = useSelector(x =>x.CurrentBox)
    //  const dispatch=useDispatch()
    //  const pagee=useSelector(x=>x.page)

//     const newSearch=()=>{
//    dispatch(setCurrentBox(null))
 //    }
    return<>
    <div className="divnav">
    {adver.Email && <label id='username'> email advertiser :{adver.Email}:)</label>}
        <NavLink to={'AllApartments'} className='menu'>Apartments</NavLink>
        <NavLink to={'Enter'} className='menu'>enter</NavLink>
        <NavLink to={'Login'} className='menu'>register</NavLink>
        <NavLink to={'Home'} className='menu'> Home</NavLink>
        
       {/* {  <Grouped className='menu'></Grouped>}
        <YoutubeSearchedForIcon onClick={''}
            //newSearch
         ></YoutubeSearchedForIcon>
         < SearchIcon></SearchIcon> */}
      {/* {  < BasicTextFields className='menu'></BasicTextFields>}  */}
        <BasicSelect></BasicSelect>
        <Adds></Adds>
    </div>
    </>
}


// import { Link, NavLink } from 'react-router-dom'
// import { Outlet, useNavigate } from "react-router-dom"
// import './Nav.css'
// import { useDispatch, useSelector } from 'react-redux'
// import Grouped from './Grouped'
// import FreeSolo from './BasicTextFields'
// import BasicTextFields from './BasicTextFields'
// import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
// import SearchIcon from '@mui/icons-material/Search';
 
//import Grouped from './Grouped.jsx'
// import { setCurrentBox } from './state_action'



// export const Nav=()=>{

//      const user = useSelector(x =>x.currentUser)
//      let kind = useSelector(x =>x.CurrentBox)
//      const dispatch=useDispatch()
//      const pagee=useSelector(x=>x.page)

//     const newSearch=()=>{
//    dispatch(setCurrentBox(null))
//      }
//     return<>
//     <div className="divnav">
//     {user.UserName && <label id='username'>שלום ל{user.UserName}:)</label>}
//         <NavLink to={'Login1'} className='menu'>הרשמה</NavLink>
//         <NavLink to={'Filters'} className='menu'>הרכבים שלנו </NavLink>
//         <NavLink to={'returns'} className='menu'> החזרת רכב</NavLink>
//         <NavLink to={'enter'} className='menu'>כניסה</NavLink>
//         <NavLink to={'Home'} className='menu'>דף הבית</NavLink>
    
//       { !kind && <Grouped className='menu'></Grouped>}
//         <YoutubeSearchedForIcon onClick={newSearch}  ></YoutubeSearchedForIcon>
//          < SearchIcon></SearchIcon>
//       { kind && < BasicTextFields className='menu'></BasicTextFields>}

//        {user.KindUPass==1 && <BasicSelect></BasicSelect>}
//     </div>
//     </>
// }


