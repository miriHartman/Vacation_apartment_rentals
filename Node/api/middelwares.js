import Department from "./models/Department.js"
import jwt, { decode } from 'jsonwebtoken'

export const checkEmail=(req,res,next)=>{
    const Email=req.body.Email
    if ( Email && /[@]/.test(Email)) 
       return next()
    res.status(400).send(`email most contains @`)

}

export const checkAuth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send('Authorization failed!')
    }

    const token = req.headers.authorization.split(' ')[1]

    if (!token) {
        return res.status(401).send('Authorization failed!')
    }
    jwt.verify(token, 'HT2yg75FXgfvy', (error, decoded) => {
        if (error || !decoded) {
            return res.status(401).send('Authentication failed!')
        }
        if (decoded) {
            next()
        }
    })
}

export const isMyDepart=(req,res,next)=>{
    const {advId}=req.query
    const {_id}=req.query
    if(!_id || !advId)
      return  res.status(400).send(`canot do it---!!:(`)
    Department.findById(_id)
    .then(a=>{
        if(a.codeAdvertiser===advId)
            next()
    })
    .catch(err=>{
        res.status(400).send(`This appartment-${id} nod in our data, check your choice:(`)
    })
}
