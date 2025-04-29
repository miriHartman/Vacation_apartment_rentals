import Department from "../models/Department.js"
import Category from "../models/Category.js"
import City from "../models/City.js"
import Advertiser from "../models/Advertiser.js"
//work
//
export const addDepartment=(req,res)=>{
    //const {path:image}=req.file
   // const {path:image}="C:\\Users\\This User\\Documents\\הנדסאים\\Node\\project\\תמונות נופשים\\11.webp"
    const { NameDepartment,DepartDescription
        ,DepartPicture,CodeCategory,CodeCity,
        address,numBeds,additions,priceDepart,codeAdvertiser
    }=req.body
    const newDepartment=new Department({
        NameDepartment,DepartDescription,
        CodeCategory,CodeCity
        ,address,numBeds,additions,priceDepart
        ,codeAdvertiser,DepartPicture
        // ,DepartPicture:image.replace('\\','/')
    })

    newDepartment.save()
    .then(async a=>{
      
        let x=await City.findByIdAndUpdate(CodeCity,{$push:{ArrCityDepartments:a._id}})
        let y=await Category.findByIdAndUpdate(CodeCategory,{$push:{ArrCatDepartment:a._id}})
        let z=await Advertiser.findByIdAndUpdate(codeAdvertiser,{$push:{ArrDepartment:a._id}})
        if(!x || !y ||!z){
            return res.status(200).send(`ההוספה הצליחה העדכון בCITY או CATEGORY  נכשל`)
        }
        
      res.status(200).send(a)})
    .catch(b=>{res.status(400).send({error:`cannot add ${b}`})})
}
//work
export const allDepart=(req,res)=>{
    Department.find()
    .populate({ path: 'CodeCategory', select: 'NameCategory' })
    .populate({ path: 'CodeCity', select:'nameCity'})
    .populate({ path: 'codeAdvertiser', select: 'Email Phone OtherPhone' })
    .then(all=>{
       return res.status(200).send(all)
    })
    .catch(err=>{res.status(400).send({error:`${err} error Departments not fund`})})
}
//work
export const deleteDepart=(req,res)=>{
    const {_id}=req.query
     console.log(_id,'node');
     
    Department.findByIdAndDelete(_id)
    .then(async a=>{
        let x=await City.findByIdAndUpdate(a.CodeCity,{$pull:{ArrCityDepartments:a._id}})
        let y=await Category.findByIdAndUpdate(a.CodeCategory,{$pull:{ArrCatDepartment:a._id}})
        let z=await Advertiser.findByIdAndUpdate(a.codeAdvertiser,{$pull:{ArrDepartment:a._id}})
        if(!x || !y || !z){
      return res.status(200).send(e=>{`ההוספה הצליחה העדכון בCITY או CATEGORY  נכשל`})
        }

       res.status(200).send(a)})
    .catch(b=>{res.status(500).send(`delete ${b.message} canot compleated:()`)})
}
//work
export const updateDepart=(req,res)=>{
    const{id}=req.params
    Department.findByIdAndUpdate(id,req.body)
    .then(async q=>{
        if(req.body.CodeCategory){
            
        let a=await Category.findByIdAndUpdate(req.body.CodeCategory,{$push:{ArrCatDepartment:q._id}})
        let b=await Category.findByIdAndUpdate(q.CodeCategory,{$pull:{ArrCatDepartment:q._id}})
        
        if(!a||!b)
       return res.status(200).send({massege:`update ${q} success!! but remove/add crashed...`})}
        res.status(200).send({massege:`update ${q} success!`})})
        .catch(err=>{res.status(400).send({error:`${err}gdfgd`})})
}
//work
export const getDepartById=(req,res)=>{
    Department.findById(req.params.id)
    .populate({ path: 'CodeCategory', select: 'NameCategory' })
    .populate({ path: 'CodeCity', select: 'Name' })
    .populate({ path: 'codeAdvertiser', select: 'Email Phone OtherPhone' })
    .then(o=>{
        if(!o)
          return  res.status(200).send({massage:`not found...:(`})
        res.status(200).send({massage: `found ${o}`})
    })
    .catch(r=>{res.status(400).send({error:`canot do it:(`})})
}


//שליפה על פי קוד עיר
//work
export const getDepartByCityId = (req, res) => {
    City.findById(req.params.id)
      .then(d => {
        if (!d) {
          return res.status(200).send({ message: `Not found city` });
        }
        const promises = d.ArrCityDepartments.map(item => {
          return Department.findById(item)
            .populate({ path: 'CodeCategory', select: 'NameCategory' })
            .populate({ path: 'CodeCity', select: 'nameCity ' })
            .populate({ path: 'codeAdvertiser', select: 'Email Phone OtherPhone' })
            .then(data => {
              if (!data) {
                return { message: `Not found department for item ${item}` };
              }
              return (data);
            })
            .catch(err => {
              return { error:`${ err.message} ddddddddddddd` }; 
            });
        });

        Promise.all(promises)
          .then(results => {
            res.status(200).send(results);
          })
          .catch(err => {
            res.status(400).send({ error: err.message });
          });
      })
      .catch(err => {
        res.status(400).send({ error: err.message });
      });
  };

  //
  export const getDepartByCatId = (req, res) => {
    Category.findById(req.params.id)
      .then(d => {
        if (!d) {
          return res.status(200).send({ message: `Not found cat` });
        }
        const promises = d.ArrCatDepartment.map(item => {
          return Department.findById(item)
            .populate({ path: 'CodeCategory', select: 'NameCategory' })
            .populate({ path: 'CodeCity', select: 'nameCity' })
            .populate({ path: 'codeAdvertiser', select: 'Email Phone OtherPhone' })
            .then(data => {
              if (!data) {
                return { message: `Not found department for item ${item}` };
              }
              return  (data) ;
            })
            .catch(err => {
              return { error: err.message }; 
            });
        });

        Promise.all(promises)
          .then(results => {
            res.status(200).send(results);
          })
          .catch(err => {
            res.status(400).send({ error: err.message });
          });
      })
      .catch(err => {
        res.status(400).send({ error: err.message });
      });
  };

// מפרסם ---שליפה לפי קוד
//work
export const getByAdvertiser= (req, res) => {
    Advertiser.findById(req.params.id)
      .then(d => {
        if (!d) {
          return res.status(200).send({ message: `Not found city` });
        }
        const promises = 
        d.ArrDepartment.map(item => {
          return Department.findById(item)
              .populate({ path: 'CodeCategory', select: 'NameCategory' })
            .populate({ path: 'CodeCity', select: 'nameCity' })
            .populate({ path: 'codeAdvertiser', select: 'Email Phone OtherPhone' })
            .then(data => {
              if (!data) {
                return { message: `Not found department for item ${item}` };
              }
              return (data);
            })
            .catch(err => {
              return { error: err.message }; 
            });
        });
        

        Promise.all(promises)
          .then(results => {
            res.status(200).send(results);
          })
          .catch(err => {
            res.status(400).send({ error: err.message });
          });
      })
      .catch(err => {
        res.status(400).send({ error: err.message });
      });
  };
//שליפה לפי כמות מיטות
//work
export const getByNumBeds=(req,res)=>{
    Department.find()
    .populate({ path: 'CodeCategory', select: 'NameCategory' })
    .populate({ path: 'CodeCity', select:{'Name':1 ,'_id':0}  })
    .populate({ path: 'codeAdvertiser', select: 'Email Phone OtherPhone' })
    .where ({$and:[{numBeds:{$gte:req.params.num}}]})
    .then(o=>{
        if( o.length==0)
          return  res.status(200).send("not found")
        res.status(200).send(o)
    })
    .catch(r=>{res.status(400).send({error:`canot do it:( ${r}`})})
}
//work
export const getChip=(req,res)=>{
    Department.find()
    .populate({ path: 'CodeCategory', select: 'NameCategory' })
    .populate({ path: 'CodeCity', select:{'Name':1 ,'_id':0}  })
    .populate({ path: 'codeAdvertiser', select: 'Email Phone OtherPhone' })
    .where({$and:[{priceDepart:{$lte:req.params.num}}]})
    .then(o=>{
        if(o.length==0)
          return  res.status(400).send({massage:`not found...:(`})
        res.status(200).send(o)
    })
    .catch(r=>{res.status(400).send({error:`canot do it:(`})})
}
