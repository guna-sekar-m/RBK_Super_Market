import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";
import { gettoken } from "../Token/token";
const getordersmasterbyuserid=async()=>{
   var res=await axios.get(`${apiurl()}/orders/getordersmasterbyuserid`, { headers: {"Authorization" : `Bearer ${gettoken()}`} });
   return res.data;
}
const saveorders=async(data)=>{
   var res=await axios.post(`${apiurl()}/orders/saveorders`,data,{ headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}
const getorderview=async(params)=>{
   var res=await axios.get(`${apiurl()}/orders/orderview`, { headers: {"Authorization" : `Bearer ${gettoken()}`},params });
   return res.data;
}
export {getordersmasterbyuserid,saveorders,getorderview};