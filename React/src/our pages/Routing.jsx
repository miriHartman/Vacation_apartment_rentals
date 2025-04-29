import { Route, Routes } from "react-router-dom"
import { AddCategory } from "./AddCategory"
import { AddCity } from "./AddCity"
import { AddDepartment } from "./AddDepartment"
import { AllApartments } from "./allAprtments"
import { AllCategory } from "./AllCategory"
import { AllCity } from "./AllCity"
import { Enter } from "./Enter"
import { Home } from "./Home"
import { Login } from "./Login"
import { Numbeds } from "./Numbeds"
import { Price } from "./Price"
import { UpdateDepart } from "./UpdateDepart"
import Adds from "./Adds"
import { MyApart } from "./MyApart"
import { Allcityid } from "./Allcityid"

export const Routing = () => {
    return <>
        <Routes>
            {/* <Route path="" element={} ></Route> */}
            {/* <Route path="Filters/Learnmore/:CodeCar" element={<Learnmore></Learnmore>} ></Route> */}
            <Route path="AddCategory" element={<AddCategory></AddCategory>} ></Route>
            <Route path="AddCity" element={<AddCity></AddCity>} ></Route>
            <Route path="AddDepartment" element={<AddDepartment></AddDepartment>} ></Route>
            <Route path="AllApartments" element={<AllApartments></AllApartments>} ></Route>
            <Route path="AllCategory" element={<AllCategory></AllCategory>} ></Route>
            <Route path="AllCity" element={<AllCity></AllCity>} ></Route>
            <Route path="Enter" element={<Enter></Enter>} ></Route>
            <Route path="Login" element={<Login></Login>} ></Route>
            <Route path="Home" element={<Home></Home>} ></Route>
            <Route path="Numbeds" element={<Numbeds></Numbeds>} ></Route>
            <Route path="Price" element={<Price></Price>} ></Route> 
            <Route path="UpdateDepart/:id" element={<UpdateDepart></UpdateDepart>} ></Route>
            <Route path="Adds" element={<Adds></Adds>} ></Route> 
            <Route path="MyApart" element={<MyApart></MyApart>} ></Route>
            <Route path="AllCity/Allcityid/:id" element={<Allcityid></Allcityid>} ></Route>
            <Route path="" element={<Home></Home>} ></Route>
        </Routes>
    </>
}