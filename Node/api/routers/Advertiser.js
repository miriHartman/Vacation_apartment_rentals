import express from "express";

import{
    login,
    enter
} from "../controlers/Advertiser.js"
import { checkEmail } from "../middelwares.js";

const router=express.Router()

router.post('/enter',enter)
router.post('',checkEmail,login)

export default router