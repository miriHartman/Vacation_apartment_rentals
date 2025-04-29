import express from"express"

import{
    
    getChip,
    
    getByNumBeds,
    getDepartByCityId,
    getDepartByCatId,
    getDepartById,
    updateDepart,
    deleteDepart,
    allDepart,
    addDepartment,
    getByAdvertiser
    
}from "../controlers/department.js"
import { checkAuth, isMyDepart } from "../middelwares.js"


const router=express.Router()

router.get('/getByAdvertiser/:id',checkAuth,getByAdvertiser)
router.get('/getChip/:num',getChip)
router.get('/getByNumBeds/:num',getByNumBeds)
router.get('/getDepartByCityId/:id',getDepartByCityId)
router.get('/getDepartByCatId/:id',getDepartByCatId)
router.get('/getDepartById/:id',getDepartById)
router.get('',allDepart)
router.post('',checkAuth,addDepartment)
router.patch('/:id',checkAuth,updateDepart)
router.delete('',deleteDepart)

export default router