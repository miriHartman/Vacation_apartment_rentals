import Category from "../models/Category.js"
//שליפת כלל הקטגוריות
export const allCategory=(req,res)=>{
    Category.find()
    .then(all=>{
        res.status(200).send(all)
    })
    .catch(err=>{res.status(400).send({error:{err} `-error categories not fund`})})
}
//הוספת קטגוריה
export const addCategory=(req,res)=>{
    const {NameCategory}=req.body
    const newCategory=new Category({
        NameCategory,
        ArrCatDepartment:[]
    })
    newCategory.save()
    .then(a=>{res.status(200).send({message:`category ${a} -sucsses`})})
    .catch(b=>{res.status(400).send({error:`cannot add ${b}`})})
}