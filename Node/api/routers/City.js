import { checkAuth } from "../middelwares.js";

import express from "express";
import {
    addCity,
    allCity
} from "../controlers/City.js"

const router=express.Router()

router.get('',allCity)
router.post('',checkAuth,addCity)

export default router