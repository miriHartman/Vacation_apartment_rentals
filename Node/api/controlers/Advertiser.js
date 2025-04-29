import express from "express"
import Advertiser from "../models/Advertiser.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
//כניסה
export const enter=(req,res)=>{

    const {Email,Password}=req.body
        
    Advertiser.find().where({Email:{$eq:Email}})
    .then(async adv1=>{
        if(adv1.length==0){
           return res.status(400).send(`email not found `)}
        let [ad]=adv1
       if(ad.Password!=Password)
           return res.status(400).send(`email and password are not match! `)

const token = await jwt.sign(
    { Email},
    process.env.SECRET,
    {
        // expiresIn: '1hr', // hours
        // expiresIn: '10m', // minutes
         expiresIn: '10m', // days
        // expiresIn: '20ms', // mili seconds
        // expiresIn: '60s' // seconds
    })
          res.status(200).send({adv1,token})

    })
    .catch(w=>{res.status(400).send(`bad @@@ ${w}`)})

    
}
//הרשמה
export const login=(req,res)=>{

    const {Email,Password,Phone,OtherPhone
        //,ArrDepartment
        }=req.body
        
    Advertiser.find().where({Email:{$eq:Email}})
   .then(
    p=>{
        if(p.length>0)
            return res.status(400).send({message:`email ${p.Email} already conected...:(`})
        bcrypt.hash(Password, 10, (error, hash) => {
            if (error) {
                return res.status(500).send({ error: error.message })
            }
        const newAdver=new Advertiser({
            Email,Password,Phone,OtherPhone,ArrDepartment:[]
         })
         newAdver.save().then(
            async advert=>{
                const token = await jwt.sign(
                    { Email },
                    process.env.SECRET,
                    {
                        // expiresIn: '1hr', // hours
                        // expiresIn: '10m', // minutes
                         expiresIn: '5m', // days
                        // expiresIn: '20ms', // mili seconds
                        // expiresIn: '60s' // seconds
                    }
                )
                res.status(200).send({advert,token})
            }
         )
    
    
    
    }
)})
.catch(err=>{res.status(500).send(`error${err}`)})
 

}
