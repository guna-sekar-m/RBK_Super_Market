import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";
import { gettoken } from "../Token/token";
const allproducts=async(params)=>{
    var res=await axios.get(`${apiurl()}/api/allproducts`,{ headers: {"Content-Type": "multipart/form-data","Authorization" : `Bearer ${gettoken()}`},params});
    return res.data;
 }
const newproduct=async(data)=>{
   const formData = new FormData();
   formData.append("Product_Name", data.Product_Name);
   formData.append("Product_Img", data.Product_Img);
   formData.append("Category", data.Category);
   formData.append("Regular_Price", data.Regular_Price);
   formData.append("Sale_Price", data.Sale_Price);
   formData.append("Stock", data.Stock);
   formData.append("Description", data.Description);
   formData.append("Status", data.Status);
   var res=await axios.post(`${apiurl()}/api/newproduct`,formData,{ headers: {"Content-Type": "multipart/form-data","Authorization" : `Bearer ${gettoken()}`} });
   return res.data;
}
const inertmanyproduct=async(data)=>{
   var res=await axios.post(`${apiurl()}/api/insertmanyproduct`,data,{ headers: {"Content-Type": "multipart/form-data","Authorization" : `Bearer ${gettoken()}`} });
   return res.data;
}
const updateproduct=async(data)=>{
   const formData = new FormData();
   formData.append("id", data.id);
   formData.append("Product_Name", data.Product_Name);
   formData.append("Product_Img", data.Product_Img);
   formData.append("Category", data.Category);
   formData.append("Regular_Price", data.Regular_Price);
   formData.append("Sale_Price", data.Sale_Price);
   formData.append("Stock", data.Stock);
   formData.append("Description", data.Description);
   formData.append("Status", data.Status);
   var res=await axios.post(`${apiurl()}/api/updateproduct`,formData,{ headers: {"Content-Type": "multipart/form-data","Authorization" : `Bearer ${gettoken()}`} });
   return res.data;
}
const deleteproduct=async(params)=>{
   var res=await axios.delete(`${apiurl()}/api/deleteproduct`,{ headers: {"Authorization" : `Bearer ${gettoken()}`},params });
   return res.data;
}

export {allproducts,newproduct,inertmanyproduct,updateproduct,deleteproduct};