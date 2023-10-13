import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";
const allcustomers=async(params)=>{
    var res=await axios.get(`${apiurl()}/api/allcustomers`,{params});
    return res.data;
 }
const newcustomer=async(data)=>{
   var res=await axios.post(`${apiurl()}/api/newcustomer`,data);
   return res.data;
}
const inertmanycustomer=async(data)=>{
   var res=await axios.post(`${apiurl()}/api/insertmanycustomer`,data);
   return res.data;
}
const updatecustomer=async(data)=>{
   var res=await axios.put(`${apiurl()}/api/updatecustomer`,data);
   return res.data;
}
const deletecustomer=async(params)=>{
   var res=await axios.delete(`${apiurl()}/api/deletecustomer`,{params});
   return res.data;
}
export {allcustomers,newcustomer,inertmanycustomer,updatecustomer,deletecustomer};