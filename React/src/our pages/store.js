
import { produce } from 'immer'
import { createStore } from 'redux';
import { enter1 } from './api';

const initialState = {
    
    currentUser: {
        // _id: "6762e1dae15a4198d73ab1b1",
        //     Email: "yi3456789i@m",
        //     Phone: "656786666"
        },
    //{},
    
}


// 2. state - הסטייט שעליו רוצים להפעיל את השינויים
const reducer = produce((state, action) => {
    switch (action.type) {
//enter
        case 'SET_CURRENT_ADVAR':
            state.currentUser = action.payload
            return;
//הרשמה
        // case 'ADD_ADVERTISER':
        //     login1().then().catch()
        //     return;
        // case 'ADD_APARTMENT':
        //     addDepartment().then(e=>{console.log(e.data);
        //     }).catch(err=>{
                
        //     })
        //     return;
        // case 'UPDATE_APARTMENT':
        //     updateDepart1().then().catch()
        //    // state.products[action.payload.index] = action.payload.product
        //     return;
        // case 'DELETE_APARTMENT':
        //     deleteDepart1().then().catch()
        //    // state.products.splice(action.payload, 1)
        //     return;
        // case 'ADD_CATEGORY' :
        //     addCategory1().then().catch()
        //     return;
        // case 'ADD_CITY':
        //     addCity1().then(console.log("work")
        //     ).catch(err=>{console.log(err);
        //     })
        //     return;
        default:
            break;
    }
}, initialState)

// 4. store
const store = createStore(reducer)
export default store

