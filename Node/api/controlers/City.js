import City from "../models/City.js"
//שליפת כל הערים
export const allCity=(req,res)=>{
    City.find()
    .then(all=>{
        res.status(200).send(all)
    })
    .catch(err=>{res.status(400).send({error:`${err} error cities not fund`})})
}
//הוספת עיר
export const addCity=(req,res)=>{
    const {nameCity}=req.body
    const newCity=new City({
        nameCity
        ,ArrCityDepartments:[]
    })
    newCity.save()
    .then(a=>{res.status(200).send({message:`city ${a} -sucsses`})})
    .catch(b=>{res.status(400).send({error:`cannot add ${b}`})})
}