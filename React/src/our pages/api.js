import axios from "axios"
const basicUrl='http://localhost:3007'

 //Department  
export  const  allDepart1 = () => {
    return  axios.get(`${basicUrl}/Department`)
}

export const getByAdverId1=(id)=>{
    const h={Authorization:`Bearer ${localStorage.getItem('token')}`}
    return axios.get(  `${basicUrl}/Department/getByAdvertiser/${id}`,{headers:h})
}
export const getChip1=(num)=>{
return axios.get(`${basicUrl}/Department/getChip/${num}`)
    }
export const getExpensive1=(num)=>{
        return axios.get(`${basicUrl}/Department/getChip/${num}`)
            }
export const getByNumBeds1=(num)=>{
    return axios.get(`${basicUrl}/Department/getByNumBeds/${num}`)
}
export const getDepartByCityId1=(id)=>{
    return axios.get(`${basicUrl}/Department/getDepartByCityId/${id}`)
}
export const getDepartByCatId1=(id)=>{
    return axios.get(`${basicUrl}/Department/getDepartByCatId/${id}`)
}
export const getDepartById1=(id)=>{
    return axios.get(`${basicUrl}/Department/getDepartById/${id}`)
}
export const addDepartment1=(depart)=>{
    const h={Authorization:`Bearer ${localStorage.getItem('token')}`}
    return axios.post(`${basicUrl}/Department`,depart,{headers:h})
}
export const updateDepart1=(id,apart)=>{
    const h={Authorization:`Bearer ${localStorage.getItem('token')}`}

    return axios.patch(`${basicUrl}/Department/${id}`, apart,{headers:h});
    

       
}

export const deleteDepart1 = (_id, advId) => {
    const h={Authorization:`Bearer ${localStorage.getItem('token')}`}
    console.log("next is api:");
    
console.log(_id,advId);

    return axios.delete(`${basicUrl}/Department`,
        {params: {_id,advId}}, {headers:h}
    );
};

//Advertiser
export const enter1=(adver)=>{
    return axios.post(`${basicUrl}/Advertiser/enter`,adver)
}
export const login1=(advar)=>{
    return axios.post(`${basicUrl}/Advertiser`,advar)
}
//Category
export const allCategory1=()=>{
    return axios.get(`${basicUrl}/Category`)
}
export const addCategory1=(category)=>{
    const h={Authorization:`Bearer ${localStorage.getItem('token')}`}

    return axios.post(`${basicUrl}/Category`,category,{headers:h})
}
//City

export const addCity1=(city)=>{
    const h={Authorization:`Bearer ${localStorage.getItem('token')}`}

    return axios.post(`${basicUrl}/City`,city,{headers:h})
}
export const allCity1=()=>{
    return axios.get(`${basicUrl}/City`)
}
