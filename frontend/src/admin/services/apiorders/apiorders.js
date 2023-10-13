import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";
import { gettoken } from "../Token/token";
const allorders=async(params)=>{
    var res=await axios.get(`${apiurl()}/orders/getallorders`,{ headers: {"Authorization" : `Bearer ${gettoken()}`},params });
    return res.data;
 }
 const saveorders=async(data)=>{
    var res=await axios.post(`${apiurl()}/orders/saveorders`,data,{ headers: {"Authorization" : `Bearer ${gettoken()}`}});
    return res.data;
 }
 const updateordermaster=async(data)=>{
   var res=await axios.put(`${apiurl()}/orders/updateordermaster`,data,{ headers: {"Authorization" : `Bearer ${gettoken()}`} });
   return res.data;
}
export {allorders,saveorders,updateordermaster}