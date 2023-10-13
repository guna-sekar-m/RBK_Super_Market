import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";

const getcategory=async()=>{
   var res=await axios.get(`${apiurl()}/api/getcategory`);
   return res.data;
}
const getsuggestion=async(params)=>{
   var res=await axios.get(`${apiurl()}/api/getsuggestion`,{params});
   return res.data;
}
const searchproduct=async(params)=>{
    var res=await axios.get(`${apiurl()}/api/searchproduct`,{params});
    return res.data;
 }
 const getofferproduct=async()=>{
   var res=await axios.get(`${apiurl()}/api/getofferproducts`);
   return res.data;
}
export {getcategory,getsuggestion,searchproduct,getofferproduct};