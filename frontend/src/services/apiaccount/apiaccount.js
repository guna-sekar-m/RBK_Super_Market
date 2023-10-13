import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";
import { gettoken } from "../Token/token";



//user details

const getuserbyuserid=async()=>{
   var res=await axios.get(`${apiurl()}/api/getuserbyuserid`, { headers: {"Authorization" : `Bearer ${gettoken()}`} });
   return res.data;
}

const updateuserdetails=async(data)=>{
   var res=await axios.put(`${apiurl()}/api/updateuserdetails`,data,{ headers: {"Authorization" : `Bearer ${gettoken()}`} });
   return res.data;
}

//address
const getshippingaddress=async()=>{
   var res=await axios.get(`${apiurl()}/api/getshippingaddress`, { headers: {"Authorization" : `Bearer ${gettoken()}`} });
   return res.data;
}
const saveshippingaddress=async(data)=>{
   var res=await axios.post(`${apiurl()}/api/saveshippingaddress`,data,{ headers: {"Authorization" : `Bearer ${gettoken()}`} });
   return res.data;
}
const updateshippingaddress=async(data)=>{
   var res=await axios.put(`${apiurl()}/api/updateshippingaddress`,data,{ headers: {"Authorization" : `Bearer ${gettoken()}`} });
   return res.data;
}
const deleteshippingaddress=async(params)=>{
   var res=await axios.delete(`${apiurl()}/api/deleteshippingaddress`,{params,headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}
export {getuserbyuserid,updateuserdetails,getshippingaddress,saveshippingaddress,updateshippingaddress,deleteshippingaddress};