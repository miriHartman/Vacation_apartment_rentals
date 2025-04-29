import { Provider } from "react-redux"

import { BrowserRouter } from "react-router-dom"
import store from './store.js'
import { Nav } from "./Nav.jsx"
import { Routing } from "./Routing.jsx"

export const Main=()=>{
    
    return<>
    <Provider store={store}>
        <BrowserRouter>
    <Nav></Nav>
    <Routing></Routing>
    
    </BrowserRouter>
    </Provider>
    </>
}