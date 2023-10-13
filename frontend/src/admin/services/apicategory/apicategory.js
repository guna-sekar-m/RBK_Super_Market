import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";
import { gettoken } from "../Token/token";
const allcategory=async(params)=>{
    var res=await axios.get(`${apiurl()}/category/getallcategory`,{ headers: {"Authorization" : `Bearer ${gettoken()}`},params });
    return res.data;
 }
 const savecategory=async(data)=>{
    const formData = new FormData();
    formData.append("Category_Name", data.Category_Name);
    formData.append("Category_img", data.Category_img);
    formData.append("Status", data.Status);
    var res=await axios.post(`${apiurl()}/category/savecategory`,formData,{ headers: {"Content-Type": "multipart/form-data","Authorization" : `Bearer ${gettoken()}`} });
    return res.data;
 }
 const updatecategory=async(data)=>{
    const formData = new FormData();
    formData.append("Category_Name", data.Category_Name);
    formData.append("Category_img", data.Category_img);
    formData.append("Status", data.Status);
    formData.append("id", data.id);
    var res=await axios.post(`${apiurl()}/category/updateCategory`,formData,{ headers: {"Content-Type": "multipart/form-data","Authorization" : `Bearer ${gettoken()}`} });
    return res.data;
 }
 const getsuggestion=async(params)=>{
   var res=await axios.get(`${apiurl()}/category/getsuggestion`,{ headers: {"Authorization" : `Bearer ${gettoken()}`},params });
   return res.data;
}
const deletecategory=async(params)=>{
   var res=await axios.delete(`${apiurl()}/category/deletecategory`,{ headers: {"Authorization" : `Bearer ${gettoken()}`},params });
   return res.data;
}
 export {allcategory,savecategory,updatecategory,getsuggestion,deletecategory}