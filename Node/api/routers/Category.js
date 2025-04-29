import express from "express";
import { checkAuth } from "../middelwares.js";

import {
    allCategory,
    addCategory
} from "../controlers/Category.js"
const router=express.Router()

router.get('',allCategory)
router.post('',checkAuth,addCategory)

export default router